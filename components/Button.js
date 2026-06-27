class ButtonCustom extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") || "Result";
    const customClass = this.getAttribute("class") || "";
    const isActive = this.hasAttribute("active");
    const buttonId = this.getAttribute("id") || "";
    this.innerHTML = `
    <button class="button ${customClass} ${isActive ? "button--active" : ""}" id="${buttonId}">${text}</button>
    `;
  }
}

customElements.define("button-custom", ButtonCustom);
