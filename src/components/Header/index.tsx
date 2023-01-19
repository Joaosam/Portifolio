import { HeaderContainer, NavLinkStyled } from "./styles";
import { Link } from "react-scroll";

export function Header() {
  const navigation = [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "Sobre mim", href: "profile" },
    { id: 3, name: "Conhecimentos", href: "skills" },
    { id: 4, name: "Projetos", href: "projects" },
  ];
  return (
    <HeaderContainer>
      <div>
        <Link to="home">
          <code>&lsaquo;JS/&rsaquo;</code>
        </Link>
      </div>
      <nav>
        {navigation.map((nav) => (
          <NavLinkStyled key={nav.id}>
            <li>
              <Link
                activeClass="active"
                to={nav.href}
                spy={true}
                smooth={true}
                duration={200}
              >
                {nav.name}
              </Link>
            </li>
          </NavLinkStyled>
        ))}
      </nav>
    </HeaderContainer>
  );
}
