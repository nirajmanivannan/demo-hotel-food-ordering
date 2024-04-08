import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <Fragment>
      <section>
        <h2>Thank you so much for your order!</h2>
        <p>Your order has been placed successfully. </p>
        <p>
          Enjoy <b>10%</b> off your next purchase with this coupon code:
          <b>NIRAJMANIVANNAN10.</b>
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderDelivered;
