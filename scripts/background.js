chrome.commands.onCommand.addListener(function(command) {
    if (command == "execute") {
      chrome.scripting.executeScript({file: "content.js"});
    }
  });