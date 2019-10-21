var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.cryptoapis.io/v1/exchanges/asset/5b1ea92e584bf50020130612");
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readystate == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
        console.log("success");
    }
};
//JQuery activated when DOM ready to be manipulated
$(document).ready(function() {
    $()
});