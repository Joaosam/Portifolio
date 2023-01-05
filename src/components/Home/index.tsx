import { LinkedinLogo, GithubLogo } from "phosphor-react";
import developer from "../../assets/developer.svg";
import {
  Contact,
  DeveloperIlustration,
  Hello,
  HomeContainer,
  SocialLink,
  SocialMedia,
} from "./styles";

export function Home() {
  return (
    <HomeContainer id="home">
      <Hello>
        <h2>Olá, eu sou</h2>
        <h1>João Santos</h1>
        <h2>Desenvolvedor front-end</h2>
        <Contact>
          <SocialMedia linkedin>
            <SocialLink
              href="https://www.linkedin.com/in/joaosam/"
              target="_blank"
            >
              <LinkedinLogo className="btnSocial" size={32} /> Linkedin
            </SocialLink>
          </SocialMedia>
          <SocialMedia github>
            <SocialLink href="https://github.com/Joaosam" target="_blank">
              <GithubLogo className="btnSocial" size={32} /> Github
            </SocialLink>
          </SocialMedia>
        </Contact>
      </Hello>

      <DeveloperIlustration>
        <img
          src={developer}
          alt="ilustração de homem programando em seu computador"
        />
      </DeveloperIlustration>
    </HomeContainer>
  );
}
