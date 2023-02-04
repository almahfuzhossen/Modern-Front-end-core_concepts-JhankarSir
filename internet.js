var imageAddr = "https://www.example.com/images/speedtest.jpg"; 
var downloadSize = 4995374; //bytes

var startTime, endTime;
var download = new Image();
download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
}

startTime = (new Date()).getTime();
download.src = imageAddr;

function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);

    console.log("Your connection speed is: \n" + 
        speedBps + " bps\n" + 
        speedKbps + " kbps\n" + 
        speedMbps + " Mbps\n"
    );
}