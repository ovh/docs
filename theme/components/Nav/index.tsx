import { NavHamburger } from '@theme-original';
import './index.scss';
import { useLocalizedNav } from './hooks';
import { NavLangs, NavMenu, NavVersions } from './NavMenu';
import { NavTitle } from './NavTitle';

export interface NavProps {
  beforeNavTitle?: React.ReactNode;
  navTitle?: React.ReactNode;
  afterNavTitle?: React.ReactNode;

  beforeNavMenu?: React.ReactNode;
  afterNavMenu?: React.ReactNode;
}

export function Nav(props: NavProps) {
  const {
    beforeNavTitle,
    afterNavTitle,
    beforeNavMenu,
    afterNavMenu,
    navTitle,
  } = props;
  // Use custom hook for localized nav links (declarative config in config/nav/index.ts)
  const navList = useLocalizedNav();

  return (
    <header className="rp-nav !h-12">
      <div className="rp-nav__left">
        {beforeNavTitle}
        {navTitle ?? <NavTitle />}
        {/* only in desktop */}
        <NavMenu menuItems={navList} position="left" />
        {afterNavTitle}
      </div>

      <div className="rp-nav__right">
        {beforeNavMenu}

        {/* only in desktop */}

        <NavMenu menuItems={navList} position="right" />
        <div className="rp-nav__others">
          <NavLangs />
          {/*<NavMenuDivider />*/}
          <NavVersions />
          {/*<SwitchAppearance />
          <SocialLinks /> */}
        </div>

        {/* only in mobile */}
        <NavHamburger />
        {afterNavMenu}
      </div>
    </header>
  );
}
