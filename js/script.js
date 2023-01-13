//toggle bar
let toggleBar = document.querySelector(".toggle-icon"),
videoContent = document.querySelector(".video-content"),
sidebar = document.querySelector(".sidebar");
toggleBar.onclick = () => {
    sidebar.classList.toggle("small");
    videoContent.classList.toggle("full");
}