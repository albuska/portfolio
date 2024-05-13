import styled, { css } from "styled-components";

interface IProps {
  isHovered?: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-left: 23px;
    padding-right: 23px;
  }

  @media (min-width: 1512px) {
    width: 1512px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  .blurred {
    filter: blur(4px);
  }
`;

export const HeaderNavLinkItem = styled.li<IProps>`
  .blurred {
    filter: blur(4px);
  }

  ${({ isHovered }) =>
    isHovered &&
    css`
      .blurred {
        filter: none;
      }
    `}

  &:hover {
    p {
      color: var(--accent-light-theme-color);
    }
  }
`;

export const HeaderNavLink = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--main-light-theme-color);
  cursor: pointer;
`;
