(function () {
  "use strict";

  var root = document.querySelector("[data-publications]");
  if (root) {
    var form = root.querySelector("form");
    var search = root.querySelector("#publication-search");
    var year = root.querySelector("#publication-year");
    var count = root.querySelector("[data-publication-count]");
    var empty = root.querySelector("[data-publication-empty]");
    var publications = Array.from(root.querySelectorAll("[data-publication]"));
    var entries = publications.map(function (element) {
      return {
        element: element,
        year: element.dataset.year,
        text: (element.textContent + " " + element.dataset.venue).toLocaleLowerCase().replace(/\s+/g, " ")
      };
    });

    function filterPublications() {
      var terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      var visible = 0;
      entries.forEach(function (entry) {
        var matches = (year.value === "all" || entry.year === year.value) &&
          terms.every(function (term) { return entry.text.indexOf(term) !== -1; });
        entry.element.hidden = !matches;
        if (matches) visible += 1;
      });
      root.querySelectorAll("[data-publication-group]").forEach(function (group) {
        group.hidden = !group.querySelector("[data-publication]:not([hidden])");
      });
      count.textContent = visible === publications.length ?
        visible + " publications" :
        visible + " of " + publications.length + " publications";
      empty.hidden = visible !== 0;
    }

    form.hidden = false;
    search.addEventListener("input", filterPublications);
    year.addEventListener("change", filterPublications);
    form.addEventListener("submit", function (event) { event.preventDefault(); });
    form.addEventListener("reset", function () {
      // Wait for the native reset to restore the controls before filtering.
      window.setTimeout(function () {
        filterPublications();
        search.focus();
      }, 0);
    });
    filterPublications();
  }

  document.querySelectorAll("[data-print]").forEach(function (button) {
    button.hidden = false;
    button.addEventListener("click", function () { window.print(); });
  });
}());
