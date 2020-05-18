import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceFroStripe = price * 100;
  const publishbleKey = "pk_test_IAUZrdLNNPrwsyKkm20cq6k30090Pg49q0";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceFroStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishbleKey}
    />
  );
};

export default StripeCheckoutButton;
