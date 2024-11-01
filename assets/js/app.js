let hamicon = document.querySelector(".stickey");
hamicon.addEventListener("click", () => {
  let sidebar = document.querySelector(".nav-links");

  if (sidebar.style.transform === "translateX(0px)") {
    sidebar.style.transform = "translateX(-250px)";
  } else {
    sidebar.style.transform = "translateX(0px)";
  }
});
