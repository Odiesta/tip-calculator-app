class TipInput extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") || "Result";
    const idInput = this.getAttribute("idInput") || "";
    const idError = this.getAttribute("idError") || "";
    const idGroup = this.getAttribute("idGroup") || "";
    const customClass = this.getAttribute("class") || "";
    this.innerHTML = `
    <div class="tip__group tip__group--hidden" id="${idGroup}">
      <label for="${idInput}" class="tip__label">${text}</label>
      <div class="tip__group-input">
        <input
          type="number"
          name="tip"
          class="tip__input"
          placeholder="0"
          id="${idInput}"
        />
        <span class="tip__input-percent">%</span>
      </div>
      <span class="tip__error tip__error--hidden" id="${idError}"
        ></span
      >
    </div>
    `;
  }
}

customElements.define("tip-input", TipInput);
