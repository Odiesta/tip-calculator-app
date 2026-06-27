class ButtonCustom extends HTMLElement {
  static observedAttributes = ["class"];

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    this._render();
  }

  _render() {
    const text = this.getAttribute("text") || "Result";
    const customClass = this.getAttribute("class") || "";
    const isActive = this.hasAttribute("active");
    const buttonId = this.getAttribute("button-id") || "";
    this.innerHTML = `
    <button class="button ${customClass} ${isActive ? "button--active" : ""}" id="${buttonId}">${text}</button>
    `;
  }
}

customElements.define("button-custom", ButtonCustom);
