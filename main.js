// elements selectors
let numberOfNotf = document.querySelector(
  ".notification-section .heading .notification"
);
let notificationMessages = Array.from(
  document.querySelectorAll(".notification-section ul li")
);

let markAllButton = document.querySelector(".mark-all");
let newSpanOfUnreadCount = document.createElement("span");
newSpanOfUnreadCount.classList.add("unread-count");
//counter of unread messages
let counter;

getNumberOfUnreadNot();

markAllButton.addEventListener("click", markAllToRead);

// function gets number of unread messages
function getNumberOfUnreadNot() {
  counter = 0;
  for (let i = 0; i < notificationMessages.length; i++) {
    if (notificationMessages[i].classList.contains("unread")) {
      counter++;
    }
  }
  if (counter > 0) {
    newSpanOfUnreadCount.textContent = counter;
    numberOfNotf.appendChild(newSpanOfUnreadCount);
  } else {
    newSpanOfUnreadCount.remove();
  }
}
function markAllToRead() {
  notificationMessages.forEach((e) => {
    if (e.classList.contains("unread")) {
      e.classList.toggle("unread");
      document.querySelector(".red-bullet").remove();
    }
  });
  getNumberOfUnreadNot();
}
