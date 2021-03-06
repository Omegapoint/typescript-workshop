function getJSON(uri: URI, fn: (data: any) => void): void {
    var request = new XMLHttpRequest();
    request.open('GET', uri.value, true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            fn(JSON.parse(this.response));
        } else {
            console.error(this);
        }
    };

    request.onerror = function() {
        console.error(this);
    };
    request.send();
}