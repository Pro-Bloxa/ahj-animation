/* eslint-disable  consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable  no-param-reassign */
/* eslint-disable  no-plusplus */
/* eslint-disable  no-lonely-if */

export default class Widget {
  constructor() {
    this.collapse = document.querySelector(".collapse");
    this.button = document.querySelector(".button");
  }

  init() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const collapsible = document.createElement("div");
    collapsible.textContent =
      "В рамках реализации большого портала вам необходимо сделать виджет'collapsible'-контейнеров,который может разворачиваться и сворачиваться. Подобный виджет есть в рамках Bootstrap, но как мы с вами 'знаем': 'jQuery не нужен', поэтому вам нужно реализовать такой же виджет на чистом JS.";
    collapsible.classList.add("collapsible");
    // collapsible.classList.add("hidden");
    this.collapse.appendChild(wrapper);
    wrapper.appendChild(collapsible);

    this.button.addEventListener("click", () => {
      wrapper.classList.toggle("show");
    });
  }
}
