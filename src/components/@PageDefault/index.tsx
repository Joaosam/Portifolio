import { Header } from "../Header";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Skills } from "../Skills";
import { Projects } from "../Projects";

import { QueryClient, QueryClientProvider } from "react-query";
import { Fragment } from "react";
import { Footer } from "../Footer";

const queryClient = new QueryClient();

export function PageDefault() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Profile />
      <Skills />
      <QueryClientProvider client={queryClient}>
        <Projects />
      </QueryClientProvider>
      <Footer />
    </Fragment>
  );
}
