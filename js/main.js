//#region Cambio de Temas !!

//#region variables

const themeSwitcherDark = document.querySelector('.local-theme #btn-dark');
const themeSwitcherLight = document.querySelector('.local-theme #btn-light');

const colorThemeSwitcherRed = document.querySelector('.session-theme #btn-red');
const colorThemeSwitcherBlue = document.querySelector('.session-theme #btn-blue');
const colorThemeSwitcherGreen = document.querySelector('.session-theme #btn-green');
const colorThemeSwitcherPurple = document.querySelector('.session-theme #btn-purple');

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
const currentTheme = localStorage.getItem('localTheme');
const currentColorTheme = localStorage.getItem('colorTheme');

if (currentTheme) {
    document.documentElement.setAttribute('data-localTheme', currentTheme);
}
if (currentColorTheme) {
    document.documentElement.setAttribute('data-colorTheme', currentColorTheme);
}

// Î Cambio de Tema Î 

//#endregion

//#endregion
//#region Botón To Top !!
const eventClickUp = document.querySelector('#fondo #clickUp');
const eventBody = document.querySelector('body');
const buttonClickUp = document.getElementById('clickUp');
const selectorBody = document.documentElement;
const selectorBodySafari = document.body;

window.onscroll = function () { addButton() };

const addButton = (e) => {
    let scrolls = document.documentElement.scrollTop;
    let scrollsSafari = document.body.scrollTop;
    if (scrolls >= 250 || scrollsSafari >= 250) {
        buttonClickUp.style.display = 'block';
    } else {
        buttonClickUp.style.display = 'none';
    }
}
const scrollToTop = (e) => {
    selectorBody.scrollTop = 0;
    selectorBodySafari.scrollTop = 0;
}

eventBody.addEventListener('scroll', addButton);
eventClickUp.addEventListener('click', scrollToTop);

//#endregion
//#region Formularios !!

//#region Work In progress
/*
const formularioPersonal = () => {
    const name = document.querySelector('#name').nodeValue;
    const email = document.querySelector('#email').nodeValue;
    const phone = document.querySelector('#phone').nodeValue;
    const ref = document.querySelector('#ref').nodeValue;

    if (name == '' || !email.contains('@') || ref == '') {
        return false;
    } else if (parseInt(phone)) {
        alert(`*****************************
        ¡Se han recogido tus datos con éxito!
        *****************************
        Nombre: ${name},
        Correo: ${email},
        Teléfono: ${phone};
        Asunto: ${ref};
        *****************************
        Pronto estaremos en contacto ;)
        *****************************
        `)
    } else {
        alert(`*****************************
        ¡Se han recogido tus datos con éxito!
        *****************************
        Nombre: ${name},
        Correo: ${email},
        Asunto: ${ref};
        *****************************
        Pronto estaremos en contacto ;)
        *****************************
        `)
    }
}

const formularioProfesional = () => {
    const name = document.querySelector('#name').nodeValue;
    const email = document.querySelector('#email').nodeValue;
    const phone = document.querySelector('#phone').nodeValue;
    const ref = document.querySelector('#ref').nodeValue;

    if (name == '' || !email.contains('@') || ref == '') {
        console.log('OK');
        return false;
    } else if (parseInt(phone)) {
        console.log('OK1.1');
        alert(`*****************************
        ¡Se han recogido sus datos con éxito!
        *****************************
        Nombre: ${name},
        Correo: ${email},
        Teléfono: ${phone};
        Asunto: ${ref};
        *****************************
        Es un placer, pronto me pondré en contacto con ustedes. ;)
        *****************************
        `)
    } else {
        console.log('OK1.2');
        alert(`*****************************
        ¡Se han recogido sus datos con éxito!
        *****************************
        Nombre: ${name},
        Correo: ${email},
        Asunto: ${ref};
        *****************************
        Es un placer, pronto me pondré en contacto con ustedes. ;)
        *****************************
        `)
    }
}
*/

//#endregion