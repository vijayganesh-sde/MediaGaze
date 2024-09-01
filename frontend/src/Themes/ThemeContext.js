import { createContext } from "react";
export const themes = {
  light : {
    background : "#efa534",
    color:"#000"
  },
  dark:{
    background: "#107c51",
    color:"#fff"
  }
}
export const ThemeContext = createContext(themes.light);