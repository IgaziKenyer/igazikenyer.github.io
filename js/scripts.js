// Empty JS for your own code to be here
var TaleURL = 0;
function updateTale(t){
TaleURL = 'https://igazikenyer.github.io/Escritos/empty.html';
}
function populatePre(TaleURL) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () { 
        document.getElementById('contents').innerHTML += this.responseText;
    };
    xhr.open('GET', TaleURL);
    xhr.send();
}
populatePre(TaleURL);

$('#button-1').click(function() {
    updateTale('https://igazikenyer.github.io/Escritos/prorae.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});

$('#button-2').click(function() {
    updateTale('https://igazikenyer.github.io/Escritos/Kleyri.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});

$('#button-3').click(function() {
    updateTale('https://igazikenyer.github.io/Escritos/Loyri.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});
$('#button-4').click(function() {
    updateTale('https://igazikenyer.github.io/Escritos/Janzka.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});
$('#button-5').click(function() {
    updateTale('https://igazikenyer.github.io/Escritos/RdeLandazuri.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});









    



