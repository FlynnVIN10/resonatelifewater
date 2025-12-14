(function () {
  "use strict";

  function setYear() {
    var el = document.getElementById("year");
    if (!el) return;
    el.textContent = String(new Date().getFullYear());
  }

  function wirePlaceholderForm() {
    var form = document.querySelector("form[aria-label='Contact form']");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Placeholder-only: no network request.
      // This keeps the demo accessible and prevents confusing behavior.
      window.alert("Thanks! This form is a placeholder and does not submit yet.");
    });
  }

  try {
    setYear();
    wirePlaceholderForm();
  } catch (err) {
    // Future-proofing: fail safe without breaking page.
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
