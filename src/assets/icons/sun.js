import styled from 'styled-components';

export const StyledSun = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, #262626 4px, transparent 0) no-repeat 5px -6px/2px
        6px,
      linear-gradient(to bottom, #262626 4px, transparent 0) no-repeat 5px 14px/2px 6px,
      linear-gradient(to bottom, #262626 4px, transparent 0) no-repeat -8px 5px/6px 2px,
      linear-gradient(to bottom, #262626 4px, transparent 0) no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px #262626;
    border: 6px solid transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px;
    border-color: #262626;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;
