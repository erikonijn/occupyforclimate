document.addEventListener("DOMContentLoaded", function(event) {
    if (window.location.href.indexOf("fr") > -1) {
        var element = document.getElementById("fr");
        element.classList.add("active");
        console.log("a");
    } else {
        var element = document.getElementById("en");
        element.classList.add("active");
        console.log("a");
    }
});