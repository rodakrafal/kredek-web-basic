const left = document.getElementById("left-side");
const click = document.getElementsByTagName("body");

document.addEventListener("mousemove", (e) => {return left.style.width = `${e.clientX / window.innerWidth * 100}%`});


document.addEventListener("click", (e) => {
    alert("Click");
    window.location.href = "pages/podstrona.html";
})

