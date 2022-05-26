import React from "react";
import StripeChekout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100,
    publishableKey =
      "pk_test_51L3gITKcbXHcntpUmj2wGddms4UbDsUpTeY0GVciByEfscpl7yG56tDNlA80hoOcm6gEOetEpEz0V7aXcpJWINKK00YzLJaOCx";

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
