import { useTranslation } from "react-i18next";
import {
  HeaderContainer,
  HeaderNavLink,
  HeaderNavLinkItem,
  HeaderNavList,
} from "./header.styles";
import { HeaderNavLinks } from "../../constants/globalConstants";
import { ChangeThemeButton } from "../ChangeThemeButton";
import { ChangeLanguage } from "../ChangeLanguage";

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <nav>
        <HeaderNavList>
          {HeaderNavLinks.map((link) => (
            <HeaderNavLinkItem
              key={link.id}
            >
              <HeaderNavLink className="font-gravity dark:text-[var(--main-dark-theme-color)] hover:dark:text-[var(--accent-dark-theme-color)]">
                {t(`header.${link.value}`)}
              </HeaderNavLink>
            </HeaderNavLinkItem>
          ))}
        </HeaderNavList>
      </nav>
      <div className="flex items-center gap-7">
        <ChangeThemeButton />
        <ChangeLanguage />
      </div>
    </HeaderContainer>
  );
};

export default Header;
