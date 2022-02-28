var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// builds/module.js
__export(exports, {
  default: () => module_default
});

// src/index.js
function src_default(Alpine) {
  Alpine.directive("insert-before-last-heading", (el, { expression }) => {
    if (el.dataset.inserted) {
      return;
    }
    const target = document.querySelector(expression);
    const headings = target.querySelectorAll("h1, h2, h3, h4, h5, h6");
    target.insertBefore(el, headings[headings.length - 1]);
    el.dataset.inserted = true;
  });
}

// builds/module.js
var module_default = src_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
