import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../../../store/actions/index";

import NavigationItem from "../NavigationItem/NavigationItem";
import Indicator from "../../../UI/Indicator/Indicator";

import "./UserNav.css";

const UserNav = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userData);
  const isPurchase = useSelector((state) => state.order.movieData);

  const { name } = (user && Object.values(user)[0]) || { name: "USER" };

  const showIndicator = isPurchase && Object.values(isPurchase).length > 0;

  useEffect(() => {
    dispatch(
      fetchUser(localStorage.getItem("userId"), localStorage.getItem("token"))
    );
  }, [dispatch]);

  const toggle = () => setActive((oldState) => !oldState);

  return (
    <div
      className={`user_div--navigation ${active ? "active" : ""}`}
      onClick={toggle}
    >
      <div className="initials_div--navigation">
        <h2 className="initials_h2--navigation">
          {name[0].toUpperCase() + name[1].toUpperCase()}
        </h2>
        {showIndicator && <Indicator />}
      </div>
      <div className="cover_div--navigation"></div>
      <div
        className="navitems_div--navigation"
        onMouseLeave={() => setActive(false)}
      >
        <ul className="list_ul--navItems">
          <li>
            <NavigationItem link="/basket">
              <div>
                Cart
                {showIndicator && <div className="cart_div--indicator"></div>}
              </div>
            </NavigationItem>
          </li>
          <li>
            <NavigationItem link="/logout">Logout</NavigationItem>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNav;
