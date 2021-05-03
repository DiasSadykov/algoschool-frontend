export const setDarkModeToLocalStorage = (darkMode: boolean) => {
    localStorage.setItem('darkMode', darkMode.toString());
}

export const getDarkModeFromLocalStorage = () => {
    return localStorage.getItem('darkMode') === "true";
}
