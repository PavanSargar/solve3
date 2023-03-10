import styled from "styled-components";

const getGridWidth = (value = 0) => 100 * (Number(value) / 12);

export const Grid = styled.div`
  display: ${({ container }) => (container ? "flex" : "block")};
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  ${({ gap }) => gap && `gap: ${gap}`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ height }) => height && `height: ${height}`}
  ${({ gap }) => gap && `gap: ${gap}`}

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
  &.what-now-card {
    padding: ${(props) => props.theme.sectionMargin};
    height: 700px;
    background: #0d1d35;
    backdrop-filter: blur(101px);
    margin: 0 2rem 2rem 2rem;
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 10px;
    @media screen and (max-width: 1175px) {
      height: auto;
    }
    @media screen and (max-width: 768px) {
      margin: 0 0 2rem 0;
      height: auto;
      padding: 2rem;
    }
    @media screen and (max-width: 400px) {
      padding: 1rem;
    }
  }
`;
