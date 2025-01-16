let btn = document.getElementsByClassName("btn");
let abc = document.getElementById("ab1");
let ab2 = document.getElementById("ab2");
let ab3 = document.getElementById("ab3");
let ab4 = document.getElementById("ab4");
let ab5 = document.getElementById("ab5");
let ab6 = document.getElementById("ab6");


btn[0].addEventListener("click", () => {

    abc.classList.toggle("open");


})


btn[1].addEventListener("click", () => {

    ab2.classList.toggle("open")

});


btn[2].addEventListener("click", () => {

    ab3.classList.toggle("open")

});


btn[3].addEventListener("click", () => {

    ab4.classList.toggle("open")

});

btn[4].addEventListener("click", () => {

    ab5.classList.toggle("open")

});


btn[5].addEventListener("click", () => {

    ab6.classList.toggle("open")

});


