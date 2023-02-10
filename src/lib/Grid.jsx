import styled from "styled-components";

const getGridWidth = (value = 0) => 100 * (Number(value) / 12);

export const Grid = styled.div`
  display: ${({ container }) => (container ? "flex" : "block")};
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ height }) => height && `height: ${height}`}

  &.border {
    border: 1px solid black;
  }
`;

export const GridItem = styled.div`
  ${({ xs }) => xs && `@media (min-width: 0px) { width: ${getGridWidth(xs)}%}`}
  ${({ sm }) =>
    sm && `@media (min-width: 576px) { width: ${getGridWidth(sm)}%}`}
  ${({ md }) =>
    md && `@media (min-width: 768px) { width: ${getGridWidth(md)}%}`}
  ${({ lg }) =>
    lg && `@media (min-width: 992px) { width: ${getGridWidth(lg)}%}`}
  ${({ xl }) =>
    xl && `@media (min-width: 1200px) { width: ${getGridWidth(xl)}%}`}

    &.border {
    border: 1px solid red;
  }
`;
