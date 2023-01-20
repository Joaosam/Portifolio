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
        <div className="aboutMe">
          <Fade direction="down" cascade delay={150} damping={-0.3}>
            <p>
              Tive meu primeiro contato com programação na faculdade de
              tecnologia, mas acabei me afastando da área por um tempo. No
              entanto, em abril de 2022 meu interesse por programação e
              tecnologia voltou. E depois de ver a paixão que muitos
              programadores têm por essa profissão, comecei a me apaixonar
              também. Assim, espero alcançar meus objetivos como profissional da
              área o mais rápido possível.
            </p>
          </Fade>
          <Fade direction="down" cascade delay={180} damping={-0.3}>
            <p>
              Busco uma oportunidade na áera de{" "}
              <span>desenvolvimento web </span>
              com o objetivo de obter experiências, vivências e também aprimorar
              meu desenvolvimento profissional e pessoal.
            </p>
          </Fade>
        </div>
      </Description>
    </ProfileContainer>
  );
}
