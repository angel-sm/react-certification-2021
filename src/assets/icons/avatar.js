import styled from 'styled-components';

export const StyledAvatar = styled.i`
  & {
    display: block;
    transform: scale(var(--ggs, 1));
    box-sizing: border-box;
    width: 12px;
    height: 18px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid #262626;
  }
  &::before {
    width: 8px;
    height: 8px;
    border-radius: 30px;
    top: 0;
    left: 2px;
  }
  &::after {
    width: 12px;
    height: 9px;
    border-bottom: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    top: 9px;
  }
`;
