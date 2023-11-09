function launcher() {
    
    // GET tests
    console.log("START of GET tests");
    findById();
    findByPage();
    getWithServerError();
    console.log("END of GET tests");
    console.log("#############################################################################");

    // POST tests
    console.log("START of POST tests");
    save();
    saveWithViolatingPayloadValidations();
    postWithServerError();
    console.log("END of POST tests");
    console.log("#############################################################################");

    // DELETE tests
    console.log("START of DELETE tests");
    // TODO
    console.log("END of DELETE tests");
    console.log("#############################################################################");

    // PUT tests
    console.log("START of PUT tests");
    // TODO
    console.log("END of PUT tests");
    console.log("#############################################################################");
}