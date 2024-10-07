import React from 'react';

type MenuButtonType = {
  text: string;
};

const MenuButtons: React.FC<MenuButtonType> = ({ text }) => {
  return <div>{text}</div>;
};

export default MenuButtons;
