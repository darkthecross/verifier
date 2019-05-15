chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var opt = {
            type: "basic",
            title: "Received message!",
            message: request.sentence,
            iconUrl: "./48.jpeg"
        };
        chrome.notifications.create("info", opt);
        sendResponse({
            status: "ok"
        });
    });