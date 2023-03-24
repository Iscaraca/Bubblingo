function triggerWordBank() {
  const word_bank = document.querySelectorAll('[data-test="word-bank"]')[0];

  if (word_bank) {
    const word_buttons = Array.from(word_bank.getElementsByTagName("button"));

    if (word_buttons[0].innerHTML.startsWith('1')) {
      return;
    }

    word_buttons.forEach(function (word_button, index) {
      word_button.prepend(document.createTextNode(`${index + 1}:\u00A0`));
    });

    function handleKeyPress(event) {
      console.log(event.key);
      if (parseInt(event.key) >= 1 && parseInt(event.key) <= word_buttons.length) {
        event.preventDefault();
        word_buttons[parseInt(event.key) - 1].click();
      }
    }

    document.addEventListener("keydown", handleKeyPress, true);
  }
}

function checkForChallenge() {
  console.log("Checking");
  const challenge = document.querySelectorAll('[data-test~="challenge"]')[0];
  if (challenge) {
    triggerWordBank();
  }
}

setInterval(checkForChallenge, 1000);
