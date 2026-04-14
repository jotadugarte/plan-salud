import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["content"]
  static classes = ["hidden"]

  connect() {
    this.ensureHiddenClass()
  }

  toggle(event) {
    if (event) event.preventDefault()
    
    this.contentTargets.forEach((target) => {
      target.classList.toggle(this.hiddenClass)
    })
  }

  ensureHiddenClass() {
    if (!this.hasHiddenClass) {
      this.hiddenClass = "hidden"
    }
  }
}
