document.getElementById("diiaa-right-button").addEventListener("click", nextSlide);
document.getElementById("diiaa-left-button").addEventListener("click", previousSlide);
document.addEventListener("keydown", keyPress);

updateSlide("next");

function updateSlide(direction) {
    if (direction == "next") {
        var selectedSlide = document.getElementById("slide").innerHTML;
        if (document.getElementById("slide" + (parseInt(selectedSlide) - 1)) != null) {
            document.getElementById("slide" + (parseInt(selectedSlide) - 1)).style.left = "-100%";
            document.getElementById("slide" + (parseInt(selectedSlide) - 1)).style.animation = "HideSlide 1s ease-in-out 1";
        }
        document.getElementById("slide" + selectedSlide).style.left = "initial";
        document.getElementById("slide" + selectedSlide).style.animation = "ShowSlide 1s ease-in-out 1";
        console.log("slijt " + (parseInt(selectedSlide)));
    }
    else if (direction == "prev") {
        var selectedSlide = document.getElementById("slide").innerHTML;
        if (document.getElementById("slide" + (parseInt(selectedSlide) + 1)) != null) {
            document.getElementById("slide" + (parseInt(selectedSlide) + 1)).style.left = "-100%";
            document.getElementById("slide" + (parseInt(selectedSlide) + 1)).style.animation = "HideSlide 1s ease-in-out 1";
        }
        document.getElementById("slide" + (parseInt(selectedSlide))).style.left = "initial";
        document.getElementById("slide" + (parseInt(selectedSlide))).style.animation = "ShowSlide 1s ease-in-out 1";
        
        console.log("slijt " + (parseInt(selectedSlide)));
    }
}

function nextSlide() {
    var selectedSlide = parseInt(document.getElementById("slide").innerHTML);
    if (document.getElementById("slide" + (parseInt(selectedSlide) + 1)) != null)
    {
        document.getElementById("slide").innerHTML = selectedSlide + 1;
        updateSlide("next");
    }
}

function previousSlide() {
    var selectedSlide = parseInt(document.getElementById("slide").innerHTML);
    if (document.getElementById("slide" + (parseInt(selectedSlide) - 1)) != null)
    {
        document.getElementById("slide").innerHTML = parseInt(selectedSlide) - 1;
        updateSlide("prev");
    }
}

function keyPress(e) {
    if (e.key == "ArrowRight") { nextSlide(); }
    if (e.key == "ArrowLeft") { previousSlide(); }
    if (e.key == " ") { nextSlide(); }
}