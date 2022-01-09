import React, { Component } from "react";

const asyncComponent = (loader) => {
  return class extends Component {
    state = {
      myComp: null,
    };

    componentDidMount() {
      loader().then((myComp) => {
        this.setState({ myComp: myComp.default });
      });
    }

    render() {
      const LoadedComponent = this.state.myComp;

      return LoadedComponent ? <LoadedComponent {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
