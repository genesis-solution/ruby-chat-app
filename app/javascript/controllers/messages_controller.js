import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="messages"
export default class extends Controller {
  static targets = ["container", "input_form"];
  connect() {
    this.resetScroll();

    this.containerTarget.addEventListener("DOMNodeInserted", () => {
      this.resetScroll();
    });
  }

  resetScroll() {
    const scrollHeight = this.containerTarget.scrollHeight;

    this.containerTarget.scrollTo(0, scrollHeight);
  }

  resetForm() {
    this.input_formTarget.reset();
  }
}
