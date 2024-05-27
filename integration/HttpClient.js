
class HttpClient {
    
    doGet(requestUrl, requestHeaders) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", this.getUrlProtocol() + requestUrl, false);
        this.fillRequestHeaders(requestHeaders, xhttp);
        xhttp.send();
    
        if (xhttp.status != 200) {
            throw new Error("ERROR with: " + this.constructHttpStatus(xhttp));
        }
    
        return xhttp.responseText;
    }
    
    doPost(requestUrl, requestHeaders, requestPayload) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", this.getUrlProtocol() + requestUrl, false);
        this.fillRequestHeaders(requestHeaders, xhttp);
        xhttp.send(requestPayload);
    
        if (xhttp.status != 201) {
            throw new Error("ERROR with: " + this.constructHttpStatus(xhttp));
        }

        return this.constructHttpStatus(xhttp);
    }

    doPostForAuthentication(requestUrl, requestHeaders, requestPayload) {
        // IM-ACTION uncomment the below code block
        /*var xhttp = new XMLHttpRequest();
        xhttp.open("POST", this.getUrlProtocol() + requestUrl, false);
        this.fillRequestHeaders(requestHeaders, xhttp);
        xhttp.send(requestPayload);*/

        // IN-ACTION uncomment the below expression to replace the "false" flag
        if (/*xhttp.status != 200*/ false) {
            throw new Error("ERROR with: " + /*this.constructHttpStatus(xhttp)*/ "400 Bad Request");
        }

        // IN-ACTION use this statement instead of below static text => xhttp.getResponseHeader("Authorization");
        var authorizationHeader = "Authorization: Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZV94IiwiZXhwIjoxNjcyMTMyMDg1LCJyb2wiOlsic2NyZWVuX25hbWVfeDEiLCJzY3JlZW5fbmFtZV94MiIsInNjcmVlbl9uYW1lX3gzIl19.QXZULySeU0P449dZj-NuyoJoTnvsA1M7240CQOEYpXuSwO9uu9Cj0W4JCIRa_rwfvszEKIdqYigjk-gbgAacOQ";
        return authorizationHeader;
    }
    
    doDelete(requestUrl) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", this.getUrlProtocol() + requestUrl, false);
        xhttp.send();
    
        if (xhttp.status != 204) {
            throw new Error("ERROR with: " + this.constructHttpStatus(xhttp));
        }

        return this.constructHttpStatus(xhttp);
    }
    
    doPut(requestUrl, requestHeaders, requestPayload) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", this.getUrlProtocol() + requestUrl, false);
        this.fillRequestHeaders(requestHeaders, xhttp);
        xhttp.send(requestPayload);
    
        if (xhttp.status != 204) {
            throw new Error("ERROR with: " + this.constructHttpStatus(xhttp));
        }

        return this.constructHttpStatus(xhttp);
    }
    
    /* ****************************************************************************************************************** */
    
    fillRequestHeaders(requestHeaders, xhttp) {
        if (requestHeaders != null) {
            for (var entry of requestHeaders.entries()) {
                xhttp.setRequestHeader(entry[0], entry[1]);
            }
        }
    }

    getUrlProtocol() {
        return "http://";
    }

    constructHttpStatus(xhttp) {
        return xhttp.status + " " + xhttp.statusText;
    }

}

