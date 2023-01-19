import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Joaosam</p>
      <p>
        Desenvolvido por <code>&lsaquo;JS/&rsaquo;</code>
      </p>
    </FooterContainer>
  );
}
