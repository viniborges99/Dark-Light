const changeThemeBtn = document.querySelector("#change-theme");


//toggle darkmode

function toggleDarkMode(){
    document.body.classList.toggle("dark");

}

// load light or dark mode
function loadTheme(){
    const darkMode = localStorage.getItem("dark")

    if (darkMode) {
        toggleDarkMode();
    
    }
}

loadTheme();//chamando a funçao


changeThemeBtn.addEventListener("change", function (){
    toggleDarkMode();

    //save or remove  dark mode

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});