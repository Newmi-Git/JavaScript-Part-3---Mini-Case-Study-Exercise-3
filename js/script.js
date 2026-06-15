const VALID_USERNAME = "admin";
const VALID_PASSWORD = "mobiwash123";
const loginForm   = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal       = document.querySelector(".modal");
const sidebar     = document.querySelector(".nav-sidebar");
const toggleBtn   = document.querySelector(".btn-toggle-nav");

function dismissModal() {
  if (modal) modal.style.display = "none";
}

function showModal() {
  if (modal) modal.style.display = "block";
}


dismissModal();

function validateLogin() {
  event.preventDefault();

  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (enteredUsername === VALID_USERNAME && enteredPassword === VALID_PASSWORD) {
    window.location.href = "index.html";
  } else {
    showModal();
  }
}

let sidebarOpen = false;

function toggleSidebar() {
  if (!sidebar || !toggleBtn) return;

  sidebarOpen = !sidebarOpen;

  const sidebarList = sidebar.querySelector("ul");

  if (sidebarOpen) {
    sidebar.style.width = "272px";
    toggleBtn.style.transform = "rotate(90deg)";


    if (sidebarList) {
      sidebarList.style.visibility = "visible";
      sidebarList.style.opacity    = "1";
    }
  } else {
    sidebar.style.width = "50px";
    toggleBtn.style.transform = "rotate(0deg)";


    if (sidebarList) {
      sidebarList.style.opacity    = "0";
      setTimeout(() => {
        sidebarList.style.visibility = "hidden";
      }, 500);
    }
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleSidebar);
}