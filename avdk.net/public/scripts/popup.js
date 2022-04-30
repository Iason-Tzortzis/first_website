slider1 = document.querySelector(".slide_1");
slider2 = document.querySelector(".slide_2");
slider3 = document.querySelector(".slide_3");
slider4 = document.querySelector(".slide_4");
slider5 = document.querySelector(".slide_5");
slider6 = document.querySelector(".slide_6");
slider7 = document.querySelector(".slide_7");
slider8 = document.querySelector(".slide_8");
modal = document.getElementById("exampleModal");

slider1.addEventListener("click", () => {
    document.getElementById("photo_1").className = "carousel-item active";
})

slider2.addEventListener("click", () => {
    document.getElementById("photo_2").className = "carousel-item active";
})

slider3.addEventListener("click", () => {
    document.getElementById("photo_3").className = "carousel-item active";
})

slider4.addEventListener("click", () => {
    document.getElementById("photo_4").className = "carousel-item active";
})

slider5.addEventListener("click", () => {
    document.getElementById("photo_5").className = "carousel-item active";
})

slider6.addEventListener("click", () => {
    document.getElementById("photo_6").className = "carousel-item active";
})

slider7.addEventListener("click", () => {
    document.getElementById("photo_7").className = "carousel-item active";
})

slider8.addEventListener("click", () => {
    document.getElementById("photo_8").className = "carousel-item active";
})

modal.addEventListener("hidden.bs.modal", function(){
    document.getElementById("photo_8").classList.remove("active");
    document.getElementById("photo_1").classList.remove("active");
    document.getElementById("photo_2").classList.remove("active");
    document.getElementById("photo_3").classList.remove("active");
    document.getElementById("photo_4").classList.remove("active");
    document.getElementById("photo_5").classList.remove("active");
    document.getElementById("photo_6").classList.remove("active");
    document.getElementById("photo_7").classList.remove("active");
});