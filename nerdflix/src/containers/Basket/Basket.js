import React, { Component, Fragment } from "react";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";
import PurchaseCompleted from "../../components/PurchaseCompleted/PurchaseCompleted";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import BillItems from "../../components/BillItems/BillItems";
import {
  fetchOrder,
  removeOrder,
  orderCompleted,
} from "../../store/actions/index";
import "./Basket.css";

class Basket extends Component {
  state = {
    isOrderCompleted: false,
    openModal: false,
    didConfirm: false,
    accountRemoval: false,
  };

  componentDidMount() {
    this.props.fetchOrder(this.props.userId, this.props.idToken);
  }

  completeOrder = () => {
    this.setState({ isOrderCompleted: true, openModal: true });
  };

  removeItem = (orderId) => {
    this.props.removeOrder(
      this.props.userId,
      orderId.title,
      this.props.idToken
    );
  };

  confirmationHandler = (isConfirm) => {
    this.setState({ didConfirm: isConfirm, openModal: false });

    if (isConfirm && this.state.isOrderCompleted) {
      this.props.orderCompleted(this.props.userId, this.props.idToken);
    }
  };

  render() {
    let orderedMovies = [];
    orderedMovies =
      this.props.orderedMovies && Object.entries(this.props.orderedMovies);

    let basketContent = (
      <Fragment>
        <ListOfMovies
          cancel
          showButton={"Remove"}
          movieBuyer={this.removeItem.bind(this)}
          movies={this.props.orderedMovies}
        />
      </Fragment>
    );

    if (this.state.isOrderCompleted && this.state.didConfirm) {
      basketContent = (
        <Route
          path={this.props.match.url + "/purchased"}
          component={PurchaseCompleted}
        />
      );
    }

    if (!this.props.isLoaded) {
      basketContent = <Spinner isFullPage />;
    }

    return (
      <div className="main_div-basket">
        <Modal
          display={this.state.openModal}
          clicked={this.confirmationHandler.bind(this)}
          message="Can we proceed?"
        >
          <div className="basket_div--content">{basketContent}</div>
          <div className="basket_div--bill">
            <h2>Receipt</h2>
            <BillItems boughtItems={orderedMovies} />
            <div className="basket_div--button">
              <NavLink to={this.props.match.url + "/purchased"}>
                <Button clicked={this.completeOrder} receipt>
                  Complete Order
                </Button>
              </NavLink>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.idToken,
    userId: state.auth.userId,
    orderedMovies: state.order.movieData,
    isLoaded: state.order.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: (userId, idToken) => dispatch(fetchOrder(userId, idToken)),
    orderCompleted: (userId, idToken) =>
      dispatch(orderCompleted(userId, idToken)),
    removeOrder: (userId, orderId, idToken) =>
      dispatch(removeOrder(userId, orderId, idToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
