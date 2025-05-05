modules.define("pushy", ["i-bem-dom", "jquery"], function (provide, bemDom, $) {
  jQuery = $;

  /* borschik:include:../../node_modules/@cmyee/pushy/js/pushy.js */

  provide(this);

  const submenuButtons = Array.from(document.querySelectorAll(".pushy-list__submenu-button"));
  const submenuTitles = Array.from(document.querySelectorAll(".pushy-list__submenu-title"));

  submenuButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      button.classList.add("pushy-list__submenu-button_active");
    });
  });

  submenuTitles.forEach((button) => {
    button.addEventListener("click", (event) => {
      submenuButtons.forEach((button) => {
        button.classList.remove("pushy-list__submenu-button_active");
      });
    });
  });
});
