import styled from "styled-components";

export const FooterContainer = styled.footer`
  user-select: none;
  padding-bottom: 18px;
  display: grid;
  grid-template-rows: min-content min-content min-content;
  row-gap: 52px;
  height: fit-content;
`;

export const FooterTextTop = styled.p`
  font-size: 1.4rem;
  text-align: center;
  display: inline-block;
  width: fit-content;
  height: fit-content;
  justify-self: center;
  color: var(--accent-light-theme-color);
  font-weight: 500;
`;

export const FooterList = styled.ul`
  display: inline-block;
  text-align: center;
  width: 80vw;
  justify-self: center;
  max-width: 900px;
`;
