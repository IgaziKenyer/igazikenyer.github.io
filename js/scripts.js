// Empty JS for your own code to be here
function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('https://igazikenyer.github.io/text.html');