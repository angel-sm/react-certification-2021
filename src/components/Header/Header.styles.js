import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9vh;
  box-shadow: 5px 5px 15px rgba(38, 38, 38, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin: auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  margin-left: 1em;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 0.8em 20px 0.8em 45px;
  border: none;
  border-radius: 0.3em;
  color: #262626;
  background: rgba(38, 38, 38, 0.1);
  font-weight: 400;
  position: absolute;
  outline: none;
`;

export const SideMenu = styled.ul`
  width: 60%;
  max-width: 250px;
  height: 100vh;
  position: absolute;
  top: 0%;
  left: ${(props) => (props.open ? '0%' : '-100%')};
  background: #f4f4f4;
  transition: all ease 0.5s;
  z-index: 2;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${(props) => (props.open ? '0%' : '-100%')};
  top: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const SideMenuOption = styled.li`
  width: 100%;
  margin-top: 0.5em;
`;

export const Option = styled(Link)`
  display: flex;
  width: 100%;
  padding: 0.5em 1em;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #262626;
  font-weight: 100;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: all ease 0.5s;
  }
`;

export const IconBorder = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  &:hover {
    background: rgba(38, 38, 38, 0.1);
    transition: all ease 0.5s;
  }

  @media (max-width: 470px) {
    display: none;
  }
`;
