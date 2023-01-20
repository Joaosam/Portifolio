import { useState } from "react";
import { BtnMobile, HeaderContainer, NavLinkStyled } from "./styles";
import { Link } from "react-scroll";

export function Header() {
  const [active, setActive] = useState(false);
  const navigation = [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "Sobre mim", href: "profile" },
    { id: 3, name: "Conhecimentos", href: "skills" },
    { id: 4, name: "Projetos", href: "projects" },
  ];

  function handleToggleActive() {
    setActive(!active);
  }

  return (
    <HeaderContainer>
      <div className="logo">
        <Link to="home">
          <code>&lsaquo;JS/&rsaquo;</code>
        </Link>
      </div>
      <nav className={active ? "active" : "inactive"}>
        <BtnMobile>
          <input
            onChange={handleToggleActive}
            checked={active}
            type="checkbox"
            name="btnMobile"
            id="btn"
            onClick={handleToggleActive}
          />
          <label htmlFor="btn">
            <div className="btn"></div>
          </label>
        </BtnMobile>
        <NavLinkStyled>
          {navigation.map((nav) => (
            <li key={nav.id}>
              <Link
                onClick={handleToggleActive}
                activeClass="active"
                to={nav.href}
                spy={true}
                smooth={true}
                duration={200}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </NavLinkStyled>
      </nav>
    </HeaderContainer>
  );
}
