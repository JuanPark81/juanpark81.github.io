(function () {
  var menu = document.getElementById("menu");
  var openBtn = document.querySelector(".hamburger");
  var closeBtn = document.querySelector(".menu-close");

  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);
  }

  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* Contact form: opens the visitor email app with the message filled in. */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      var subject = "Portfolio inquiry from " + name;
      var body = message + "\n\n— " + name + " (" + email + ")";
      window.location.href =
        "mailto:" + form.dataset.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
