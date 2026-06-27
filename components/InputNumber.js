class InputNumber extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") || "Result";
    const idInput = this.getAttribute("idInput") || "";
    const idError = this.getAttribute("idError") || "";
    const image = this.getAttribute("image") || "";
    const customClass = this.getAttribute("class") || "";
    this.innerHTML = `
    <div class="input__group">
      <label for="input" class="input__label">${text}</label>
      <div class="input__group-input">
        <img
          src="images/icon-${image}.svg"
          alt="Icon ${image}"
          class="input__input-symbol"
        />
        <input
          type="number"
          name="${text}"
          class="input__input"
          placeholder="0"
          id="${idInput}"
        />
      </div>
      <span class="input__error input__error--hidden" id="${idError}"
        >Can't be zero</span
      >
    </div>
    `;
  }
}

customElements.define("input-number", InputNumber);
