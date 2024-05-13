import { FooterContainer, FooterTextTop } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTextTop className="font-gravity dark:text-[var(--accent-dark-theme-color)]">
        Thanks for visiting!
      </FooterTextTop>
      <ul></ul>
    </FooterContainer>
  );
};

export default Footer;
