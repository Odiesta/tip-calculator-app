class ResultText extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const text = this.getAttribute("text") || "";
    const value = this.getAttribute("value") || "0";
    const valueId = this.getAttribute("id") || "";
    this.innerHTML = `
    <div class="result__text-wrapper">
      <p class="result__text">
        ${title} <span class="result__text--sub">${text}</span>
      </p>
      <p class="result__value" id="${valueId}">$${value}</p>
    </div>
    `;
  }
}

customElements.define("result-text", ResultText);
