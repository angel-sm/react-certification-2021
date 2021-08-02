import styled from 'styled-components';

export const StyledMenu = styled.i`
  cursor: pointer;
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 1.5px;
    border-radius: 3px;
    background: #262626;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -6px;
  }
  &::after {
    top: 6px;
  }
`;
