import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price + 100;
  const publishableKey =
    "pk_test_51HA2gqFRPtJRULcTUN96E4m2tnmz0AkTY6F4TaAf8GX7p33CWzQX85il43mlEKYYWzKAlaAhqBCwuNCRcMTJ3U4q007z5kYqoN";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      currency="USD"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
