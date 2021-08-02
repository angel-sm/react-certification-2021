import React, { useState } from 'react';

import {
  HeaderContainer,
  HeaderContent,
  SearchInput,
  SearchContainer,
  SideMenu,
  Overlay,
  SideMenuOption,
  Option,
  IconBorder,
} from './Header.styles';
import { StyledAvatar, StyledMenu, StyledSearch, StyledSun } from '../../assets/icons';

const Header = () => {
  const [open, isOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledMenu icon-role="menu" onClick={() => isOpen(!open)} />
        <SideMenu open={open}>
          <SideMenuOption to="/">
            <Option>Home</Option>
          </SideMenuOption>
        </SideMenu>
        <Overlay open={open} onClick={() => isOpen(!open)} />

        <SearchContainer>
          <StyledSearch icon-role="search" />
          <SearchInput />
        </SearchContainer>

        <IconBorder to="/">
          <StyledSun icon-role="sun" />
        </IconBorder>
        <IconBorder to="/">
          <StyledAvatar icon-role="user" />
        </IconBorder>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
