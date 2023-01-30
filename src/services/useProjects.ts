import axios from "axios";
import { useQuery } from "react-query";

export function useProjects(): any {
  return useQuery(
    "projects",
    () =>
      axios
        .get(
          "https://api.github.com/users/joaosam/repos?sort=created&per_page=6"
        )
        .then((response) => response.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
