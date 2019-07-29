import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Db5tPdrTRhEDePjQaJZr4Zo300aiLsHafr';

    const onToken = token => {
        console.log(token);
        alert('Payment Susscessful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripCheckoutButton;
