const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');

    burger.addEventListener("click", () => {
        nav.classList.toggle("navActive");
    });
}

navSlide();

function myFunction(x) {
    x.classList.toggle("change");
}

new fullpage('#fullpage', {
    autoScrolling: true,
})