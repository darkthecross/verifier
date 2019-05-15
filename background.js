chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var opt = {
            type: "basic",
            title: "Received message!",
            message: request.sentence,
            iconUrl: ""
        };
        chrome.notifications.create("info", opt);
        sendResponse({
            status: "ok"
        });
    });