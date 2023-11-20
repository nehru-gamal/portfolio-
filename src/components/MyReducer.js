export const initState = {
  isDarkMode: "light",
};

export const modeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGOLE_MODE":
      return {
        ...state,
        isDarkMode: state.isDarkMode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};
