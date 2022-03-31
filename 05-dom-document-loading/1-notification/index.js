export default class NotificationMessage {
  static currentNotification;

  constructor(message, { duration = 2000, type = "success" } = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;
    this.render();
  }

  get template() {
    return `<div class="notification ${this.type}" style="--value:${
      this.duration / 1000
    }s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
        ${this.message}
      </div>
    </div>
  </div>`;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  show(targetElement = document.body) {
    if (NotificationMessage.currentNotification) {
      NotificationMessage.currentNotification.remove();
    }

    targetElement.append(this.element);

    setTimeout(() => {
      this.remove();
    }, this.duration);

    NotificationMessage.currentNotification = this;
  }

  remove() {
    this.element && this.element.remove();
  }

  destroy() {
    this.element = null;
    NotificationMessage.currentNotification = null;
  }
}