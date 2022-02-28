export default function (Alpine) {
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
