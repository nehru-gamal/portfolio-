export const initState = {
  isDarkMode: "light",
  home: "main",
};

export const modeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGOLE_MODE":
      return {
        ...state,
        isDarkMode: state.isDarkMode === "light" ? "dark" : "light",
      };
    case "HOME":
      return {
        ...state,
        home: state.home === "page",
      };
    default:
      return state;
  }
};
