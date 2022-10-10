var parent = document.querySelector(".model-parent"),
btn = document.querySelector("button"),
X = document.querySelector(".X"),
section = document.querySelector("section");

btn.addEventListener("click", appear);
function appear()
{
    parent.style.display = "block";
    section.style.filter = "blur(10px)";
}
X.addEventListener("click", disappearX);
function disappearX() {
    parent.style.display = "none";
    section.style.filter = "blur(10px)";
}

parent.addEventListener("click", disappearParent);
function disappearParent(e) {
    if(e.target.className== "mode-parent"){
        parent.style.display = "none";
        parent.style.filter = "blur(10px)";
    }
}