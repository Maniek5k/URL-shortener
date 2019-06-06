var endpoint = "https://www.jsonstore.io/5296325ea6e5e479f15c71d04de617fb4c042559bbaab6a4b42be111a1f7e3e0";
var getHash = window.location.hash.substr(1)
var button = document.getElementById("shorten");
var url = document.getElementById("url-input").value;
var output = document.getElementById("output");
new ClipboardJS('.btn');


function request() {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
    })
}

function getRandom() {
    var randomString = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return randomString;
};

function getUrl() {
    
    var dataOk = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if (!dataOk) {
        newurl = "http://" + url;
        return newurl;
    } else {
        return url;
    }
};

function hash() {
    if (window.location.hash == "") {
        window.location.hash = getRandom();
    }
};

shorten.addEventListener('click', function shorten() {
    var mainUrl = getUrl();
    hash();
    request(mainUrl);
    output.innerHTML = window.location;
});

