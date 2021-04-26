document.addEventListener("DOMContentLoaded", function(event) {
    if (window.location.href.indexOf("fr") > -1) {
        var element = document.getElementById("fr");
        element.classList.add("active");
    } else {
        var element = document.getElementById("en");
        element.classList.add("active");
    }
});

function english(){
    arr = window.location.href.split("/");
    index = arr.indexOf("fr");
    if(index > -1){
        arr.splice(index, 1);
        window.location.href = arr.join("/");
    }
}

function french(){
    arr = window.location.href.split("/");
    index = arr.indexOf("fr");
    if(index > -1){
    } else {
        arr.splice(arr.length-1, 0, "fr");
        window.location.href = arr.join("/");
    }
}