import React from 'react';
import { PayButton } from '@paybutton/react';

const BitButton = () => {
  const to = 'bitcoincash:';
  const amount = 2;
  const currency = 'USD';
  const text = 'I take Bitcoin Cash';
  const hoverText = 'Send $2';
  const theme = {
    palette: {
      primary: '#5C0775',
      secondary: '#FFFFFF',
      tertiary: '#333333',
    },
  };

  return (
    <PayButton
      to={to}
      amount={amount}
      currency={currency}
      text={text}
      hoverText={hoverText}
      theme={theme}
    />
  );
};

export default BitButton;
