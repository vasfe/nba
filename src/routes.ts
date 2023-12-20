import { Games, SeasonAverages } from "./pages";

type NavItem = {
    label: string,
    url: string,
    component: () => JSX.Element
  }
  
  export const routes: NavItem[] = [
    {
      label: "Games",
      url: "/",
      component: Games
    },
    {
      label: "Season Averages",
      url: "/seasonAverages",
      component: SeasonAverages
    },
  ];
  