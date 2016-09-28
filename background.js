function onHighlighted(windowInfo) {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  } else {
    console.log(windowInfo);
  }
}

function highlightFirstTab() {
  chrome.windows.getCurrent(function(window) {
    console.log(window.id);
    chrome.tabs.highlight({
      windowId: window.id,
      tabs: [0]
    }, onHighlighted);
  });
}

function spaceNotification(){
  var notificationID = "notificationID";
  NotificationOptions = {
    "type": "basic",
    "iconUrl": "Andrameda.jpg",
    "title": "Title of Notification",
    "message": "This is your fun fact! *Idea, clickable link to more info",
    // Go here: http://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript to figure how to increment per day
    // "eventTime": "Date.now() + "
  };
  chrome.notifications.create(notificationID, NotificationOptions, function(notificationId) {});
}


chrome.browserAction.onClicked.addListener(spaceNotification);
