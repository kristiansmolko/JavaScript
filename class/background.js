chrome.browserAction.onClicked.addListener(
    function() {
        chrome.windows.create({
            "url": "index.html",
            "type": "popup",
            "height": 1000,
            "width": 500,
            "left": 1
        }, function(window){})
    }
)