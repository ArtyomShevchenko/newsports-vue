class Form {
    constructor(name, surname, email, message) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.message = message;
    }
}
const formData = new Form();

// variables
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu").children[0];
const nav = document.querySelector(".navigation-container");
const submitButton = document.querySelector(".submit-button")
const form = document.querySelector("form");
const scrollButton = document.querySelector("#scrollButton");
const links = document.querySelectorAll("a");

document.body.addEventListener("click", function(event) {

    // burger
    if (event.target === burger) {
        burger.classList.toggle(`_active`);
        menu.classList.toggle(`_active`);
        nav.classList.toggle("navigation-container_active");
        document.body.classList.toggle("open-menu-burger");
    } else {
        burger.classList.remove(`_active`);
        menu.classList.remove(`_active`);
        nav.classList.remove("navigation-container_active");
        document.body.classList.remove("open-menu-burger");
    };

    // form
    if (event.target === submitButton) {
        event.preventDefault();

        if (form[4].checked === true) {
            formData.name = form[0].value;
            formData.surname = form[1].value;
            formData.email = form[2].value;
            formData.message = form[3].textContent;

            console.log(JSON.stringify(formData))
        }
    };

    // if(event.target === scrollButton) {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     })
    // };
});

document.querySelectorAll(".post-button").forEach(button => {
    button.addEventListener("click", () => {
        console.log(button);
        button.parentElement.classList.toggle("_active-post");
        nav.classList.toggle("_shrink");
    })
});