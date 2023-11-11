function doGet(requestUrl, requestHeaders) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", requestUrl, false);
    fillRequestHeaders(requestHeaders, xhttp);
    xhttp.send();

    var response;
    if (xhttp.status == 200) {
        response = xhttp.responseText;
    } else {
        throw "ERROR with: " + xhttp.statusText;
    }

    return response;
}

function doPost(requestUrl, requestHeaders, requestPayload) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", requestUrl, false);
    fillRequestHeaders(requestHeaders, xhttp);
    xhttp.send(requestPayload);

    if (xhttp.status != 201) {
        throw "ERROR with: " + xhttp.statusText;
    }
}

function doDelete(requestUrl) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", requestUrl, false);
    xhttp.send();

    if (xhttp.status != 204) {
        throw "ERROR with: " + xhttp.statusText;
    }
}

function doPut(requestUrl, requestHeaders, requestPayload) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", requestUrl, false);
    fillRequestHeaders(requestHeaders, xhttp);
    xhttp.send(requestPayload);

    if (xhttp.status != 204) {
        throw "ERROR with: " + xhttp.statusText;
    }
}

/* ****************************************************************************************************************** */

function fillRequestHeaders(requestHeaders, xhttp) {
    if (requestHeaders != null) {
        for (var entry of requestHeaders.entries()) {
            xhttp.setRequestHeader(entry[0], entry[1]);
        }
    }
}