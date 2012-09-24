chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('pad.html')}, function(tab) {
    // Tab opened.
  });
});