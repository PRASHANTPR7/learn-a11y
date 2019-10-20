var modal = document.querySelector(".focus-modal");
var modalButton = document.querySelector(".focus-modal-button");
var modalOverlay = document.querySelector(".focus-modal-overlay");
var cancelButton = document.querySelector(".focus-modal-cancel");

modalButton.addEventListener("click", open);
cancelButton.addEventListener("click", close);

// Get a list of tabbable elements here:
// https://github.com/jkup/focusable
var focusableElements =
  'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]';

function open() {
  // Show the modal and overlay
  let previouslyFocused = document.activeElement;
  //adding event listenrs only on modals element;

  //making focusable elemenst dom nodes
  focusableElements = modal.querySelectorAll(focusableElements);
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstItem = focusableElements[0];
  var lastItem = focusableElements[focusableElements.length - 1];

  modal.addEventListener("keydown", trap);
  modal.style.display = "block";
  modalOverlay.style.display = "block";

  function trap(e) {
    //if tab is pressed
    if (e.keyCode === 9) {
      //shift key is hold
      if (e.shiftKey) {
        //moving backwards
        if (document.activeElement === fisrtItem) {
          e.preventDefault();
          lastItem.focus();
        }
      } else {
        if (document.activeElement === lastItem) {
          e.preventDefault();
          firstItem.focus();
        }
      }
    } else if (e.keyCode === 27) {
      close();
    }
  }
}

function close() {
  // Hide the modal and overlay
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}
