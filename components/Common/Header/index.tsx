'use client'
import Logo from "@/app/assets/logo.svg";
import "./index.scss";
import DropDown from "../DropDown";

interface HeaderSection {
  name: string;
  hideInSm: boolean;
}

const Header: React.FC = () => {
  const sectionList: HeaderSection[] = [
    {
      name: "Coaching",
      hideInSm: true
    },
    {
      name: "For business",
      hideInSm: false,
    },
    {
      name: "Log in",
      hideInSm: false,
    },
  ];

  return (
    <div className="header-inner">
      <div className="header-container">
        <div className="container-left">
          <Logo />
        </div>
        <div className="container-right">
          <DropDown />
          <div className="container-right-links">
            {sectionList.length &&
              sectionList.map((_section) => (
                <a key={_section.name} className={`right-link ${_section.hideInSm ? 'hide-in-sm' : ''}`} href="./" target="_blank">{_section.name}</a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
