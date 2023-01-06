import { HeaderContainer, Ul } from "./styles";

export function Header() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Sobre mim", href: "#profile" },
    { name: "Conhecimentos", href: "#skills" },
    { name: "Projetos", href: "#projects" },
  ];
  return (
    <HeaderContainer>
      <div>
        <a href="#home">
          <code>&lsaquo;JS/&rsaquo;</code>
        </a>
      </div>
      <nav>
        {navigation.map((nav) => (
          <Ul key={nav.name}>
            <li>
              <a href={nav.href}>{nav.name}</a>
            </li>
          </Ul>
        ))}
      </nav>
    </HeaderContainer>
  );
}
