import { Header } from "../Header";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Skills } from "../Skills";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function PageDefault() {
  return (
    <>
      <Header />
      <Home />
      <Profile />
      <QueryClientProvider client={queryClient}>
        <Skills />
      </QueryClientProvider>
    </>
  );
}
