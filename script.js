function myFunction() {
    var element = document.body;
    var texty = document.getElementsByClassName("text-color-main");

    element.classList.toggle("dark-body");

    texty.classList.toggle("dark-text")
}