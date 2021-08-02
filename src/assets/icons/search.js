import styled from 'styled-components';

export const StyledSearch = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 13px;
    height: 13px;
    border: 2px solid #262626;
    border-radius: 100%;
    margin-left: -4px;
    margin-top: -4px;
    z-index: 1;
    transform: translateX(20px);
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 9px;
    transform: rotate(-45deg);
    top: 8px;
    left: 10px;
    background: #262626;
  }
`;
