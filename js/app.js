var btnContainer = document.getElementById("toggle-nav");
var toggleBtn = btnContainer.getElementsByClassName("toggle-btn");

for (var i = 0; i < toggleBtn.length; i++) {
    toggleBtn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeBtn");
        current[0].classList.remove("activeBtn");
        this.classList.add("activeBtn");
    });
}
