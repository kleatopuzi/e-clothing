import React from "react";
import StripeChekout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51L3gITKcbXHcntpUmj2wGddms4UbDsUpTeY0GVciByEfscpl7yG56tDNlA80hoOcm6gEOetEpEz0V7aXcpJWINKK00YzLJaOCx";

  const onToken = (token) => {
    // alert(1);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment SUCCESSFUL");
        console.log("token", response);
      })
      .catch((error) => {
        console.log("Payment errpr:", JSON.parse(error));
        alert("ERROR");
        console.log("err", error);
      });
    // console.log("token", priceForStripe, token);
    // alert("Payment Successful");
  };
  return (
    <StripeChekout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      panelLabel="Pay Now "
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
