//#region variables

const themeSwitcherDark = document.querySelector('.local-theme #btn-dark');
const themeSwitcherLight = document.querySelector('.local-theme #btn-light');

const colorThemeSwitcherRed = document.querySelector('.session-theme #btn-red');
const colorThemeSwitcherBlue = document.querySelector('.session-theme #btn-blue');
const colorThemeSwitcherGreen = document.querySelector('.session-theme #btn-green');
const colorThemeSwitcherPurple = document.querySelector('.session-theme #btn-purple');

const currentTheme = localStorage.getItem('localTheme');
const currentColorTheme = localStorage.getItem('colorTheme');

//#endregion

//#region funciones
const toggleThemeDark = (e) => {
    localStorage.setItem('localTheme', 'dark');
    document.documentElement.setAttribute('data-localTheme', 'dark');
}
const toggleThemeLight = (e) => {
    localStorage.setItem('localTheme', 'light');
    document.documentElement.setAttribute('data-localTheme', 'light');
}
const toggleColorThemeRed = (e) => {
    localStorage.setItem('colorTheme', 'red');
    document.documentElement.setAttribute('data-colorTheme', 'red');
}
const toggleColorThemeBlue = (e) => {
    localStorage.setItem('colorTheme', 'blue');
    document.documentElement.setAttribute('data-colorTheme', 'blue');
}
const toggleColorThemeGreen = (e) => {
    localStorage.setItem('colorTheme', 'green');
    document.documentElement.setAttribute('data-colorTheme', 'green');
}
const toggleColorThemePurple = (e) => {
    localStorage.setItem('colorTheme', 'purple');
    document.documentElement.setAttribute('data-colorTheme', 'purple');
}
//#endregion

//#region ojeadores

themeSwitcherDark.addEventListener('click', toggleThemeDark);
themeSwitcherLight.addEventListener('click', toggleThemeLight);

colorThemeSwitcherRed.addEventListener('click', toggleColorThemeRed);
colorThemeSwitcherBlue.addEventListener('click', toggleColorThemeBlue);
colorThemeSwitcherGreen.addEventListener('click', toggleColorThemeGreen);
colorThemeSwitcherPurple.addEventListener('click', toggleColorThemePurple);

//#endregion

//#region condiciones
if (currentTheme) {
    document.documentElement.setAttribute('data-localTheme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitcherDark.checked = true;
        themeSwitcherLight.checked = false;
    } else {
        themeSwitcherLight.checked = true;
        themeSwitcherDark.checked = false;
    }
}
if (currentColorTheme) {
    document.documentElement.setAttribute('data-colorTheme', currentColorTheme);
    if (currentColorTheme === 'red') {
        colorThemeSwitcherRed.checked = true;
        colorThemeSwitcherPurple.checked = false;
        colorThemeSwitcherGreen.checked = false;
        colorThemeSwitcherBlue.checked = false;
    } else if (currentColorTheme === 'blue') {
        colorThemeSwitcherRed.checked = false;
        colorThemeSwitcherPurple.checked = false;
        colorThemeSwitcherGreen.checked = false;
        colorThemeSwitcherBlue.checked = true;
    } else if (currentColorTheme === 'purple') {
        colorThemeSwitcherRed.checked = false;
        colorThemeSwitcherPurple.checked = true;
        colorThemeSwitcherGreen.checked = false;
        colorThemeSwitcherBlue.checked = false;
    } else {
        colorThemeSwitcherRed.checked = false;
        colorThemeSwitcherPurple.checked = false;
        colorThemeSwitcherGreen.checked = true;
        colorThemeSwitcherBlue.checked = false;
    }
}
//#endregion