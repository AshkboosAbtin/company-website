/* =====================================================
   ELEMENTS
===================================================== */

const body = document.body;
const header = document.getElementById("header");

const languageSwitch =
    document.getElementById("languageSwitch");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const year =
    document.getElementById("year");


/* =====================================================
   LANGUAGE
===================================================== */

let currentLanguage = localStorage.getItem("language") || "fa";

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    if (language === "fa") {

        document.documentElement.lang = "fa";
        document.documentElement.dir = "rtl";

        languageSwitch.textContent = "EN";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        languageSwitch.textContent = "FA";
    }


    const elements =
        document.querySelectorAll("[data-fa][data-en]");

    elements.forEach(element => {

        element.textContent =
            language === "fa"
                ? element.dataset.fa
                : element.dataset.en;

    });
}


/* =====================================================
   LANGUAGE BUTTON
===================================================== */

languageSwitch.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "fa"
            ? "en"
            : "fa";

    setLanguage(newLanguage);
});


/* =====================================================
   MOBILE MENU
===================================================== */

mobileMenuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* close mobile menu after click */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* =====================================================
   HEADER SCROLL
===================================================== */

function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);


/* =====================================================
   CURRENT YEAR
===================================================== */

year.textContent = new Date().getFullYear();


/* =====================================================
   INIT
===================================================== */

setLanguage(currentLanguage);

updateHeader();