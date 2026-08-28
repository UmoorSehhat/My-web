function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("show");

}


function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

}