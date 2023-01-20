import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: ${(props) => props.theme["bg-secundary"]};
  padding: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 5rem;

  @media (max-width: 1024px) {
    gap: 0;
    padding: 10rem 3rem;
    text-align: center;
  }
`;

export const ProfileImage = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    top: -2%;
    left: -2%;
    width: 30rem;
    height: 30rem;
    filter: blur(0.5rem);
    border-radius: 50%;
    border: 5px solid ${(props) => props.theme["secundary-color"]};
  }

  img {
    width: 30rem;
    border-radius: 50%;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Description = styled.div`
  .title {
    text-align: center;
    font-size: 4rem;
    color: ${(props) => props.theme["text-default"]};
  }

  .title span,
  .aboutMe span {
    color: ${(props) => props.theme["default-blue"]};
  }

  .aboutMe {
    color: ${(props) => props.theme["text-default"]};
    font-size: 2rem;
  }
  p {
    &:nth-child(1) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    .aboutMe {
      font-size: 2rem;
    }
  }
`;
