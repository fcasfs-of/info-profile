
  function mode_chanhe(btn) {
  if (btn.innerHTML === `<i class="fas fa-moon"></i>`) {
    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.color = "#000";
    btn.style.backgroundColor = "#fff";
    document.body.classList.add("darkmode");
  } else {
    btn.innerHTML = `<i class="fas fa-moon"></i>`;
   btn.style.color = "orange";
    btn.style.backgroundColor = "#111";
    document.body.classList.remove("darkmode");
  }
}




