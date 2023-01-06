import { Header } from "../Header";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Skills } from "../Skills";

export function PageDefault() {
  return (
    <>
      <Header />
      <Home />
      <Profile />
      <Skills />
    </>
  );
}
