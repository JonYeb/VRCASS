import MenuButtons from '../molecules/MenuButtons';

const SideMenu = () => {
  return (
    <div>
      <MenuButtons text="Login" />
      <MenuButtons text="account uploads" />
      <MenuButtons text="account favourites" />
      <MenuButtons text="local favourites" />
    </div>
  );
};

export default SideMenu;
