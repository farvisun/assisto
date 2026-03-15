chrome.runtime.onInstalled.addListener(() => {
  console.log("Assisto extension installed");
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.sidePanel.open({ tabId: tab.id });
  }
});
