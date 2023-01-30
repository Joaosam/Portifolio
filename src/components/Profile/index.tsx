import { Description, ProfileContainer, ProfileImage } from "./style";
import { Fade } from "react-awesome-reveal";

export function Profile() {
  return (
    <ProfileContainer id="profile">
      <Fade direction="down" cascade damping={-0.3}>
        <ProfileImage>
          <img src="https://github.com/Joaosam.png" alt="Imagem de perfil" />
        </ProfileImage>
      </Fade>
      <Description>
        <Fade direction="down" cascade delay={100} damping={-0.3}>
          <div className="title">
            <h2>
              Sobre mim<span>.</span>
            </h2>
          </div>
        </Fade>
        <div data-testid="aboutMe" className="aboutMe">
          <Fade direction="down" cascade delay={150} damping={-0.3}>
            <p>
              Tive meu primeiro contato com programação na faculdade de
              tecnologia, mas acabei me afastando da área por um tempo. No
              entanto, em abril de 2022 meu interesse por programação e
              tecnologia voltou. E depois de ver a paixão que muitos
              programadores têm por essa profissão, comecei a me apaixonar
              também.
            </p>
          </Fade>
          <Fade direction="down" cascade delay={180} damping={-0.3}>
            <p>
              Com experiência em React.js, JavaScript, TypeScript, Styled
              Components, consumo de APIs REST e metodologia ágil. Atualmente
              atuo como <span>desenvolvedor Front-end </span> na Hiplatform,
              onde trabalho especialmente com o chatbot e FAQ.
            </p>
          </Fade>
        </div>
      </Description>
    </ProfileContainer>
  );
}
