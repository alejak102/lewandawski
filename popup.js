document.getElementById('copy-iframe-button').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: 'copy.js' });
    });
});

document.getElementById('block-script-button').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      chrome.runtime.sendMessage({ action: 'blockScript', tabId: tabId });
    });
  });