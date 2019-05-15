// Let's define a command.
var commands = {
    'test *name': function (name) {
        console.log(name);
        chrome.runtime.sendMessage({
            sentence: name
        }, function (response) {
            console.log(response.status);
        });
    }
};

setTimeout(function () {
    navigator.mediaDevices.getUserMedia({
            audio: true
        })
        .catch(function () {
            console.log("Cannot get microphone permission.");
        });
    if (annyang) {
        // Add our commands to annyang
        annyang.addCommands(commands);
        // Start listening.
        annyang.start();
    }
}, 100);