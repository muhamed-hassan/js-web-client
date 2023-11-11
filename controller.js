function launcher() {    
 
    // GET tests
    var collectedOutput = "<div style=\"font-weight: bold;\">START of GET tests</div>";
    var outputOfFindById = findById();
    collectedOutput += "<div style=\"margin-left: 20px;\">> " + outputOfFindById + "</div>";
    var outputOfFindByPage = findByPage();
    collectedOutput += "<div style=\"margin-left: 20px;\">> " + outputOfFindByPage + "</div>";
    var outputOfGetWithServerError = getWithServerError();
    collectedOutput += "<div style=\"color: red; margin-left: 20px;\">> " + outputOfGetWithServerError + "</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">END of GET tests</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">#############################################################################</div>";
    
    // POST tests    
    collectedOutput += "<div style=\"font-weight: bold; margin-top: 5px;\">START of POST tests</div>";
    var outputOfSave = save();
    collectedOutput += "<div style=\"margin-left: 20px;\">> " + outputOfSave + "</div>";
    var outputOfSaveWithViolatingPayloadValidations = saveWithViolatingPayloadValidations();
    collectedOutput += "<div style=\"color: red; margin-left: 20px;\">> " + outputOfSaveWithViolatingPayloadValidations + "</div>";
    var outputOfPostWithServerError = postWithServerError();
    collectedOutput += "<div style=\"color: red; margin-left: 20px;\">> " + outputOfPostWithServerError + "</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">END of POST tests</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">#############################################################################</div>";
    
    // DELETE tests
    collectedOutput += "<div style=\"font-weight: bold; margin-top: 5px;\">START of DELETE tests</div>";
    var outputOfDeleteById = deleteById();
    collectedOutput += "<div style=\"margin-left: 20px;\">> " + outputOfDeleteById + "</div>";
    var outputOfDeleteWithServerError = deleteWithServerError();
    collectedOutput += "<div style=\"color: red; margin-left: 20px;\">> " + outputOfDeleteWithServerError + "</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">END of DELETE tests</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">#############################################################################</div>";

    // PUT tests
    collectedOutput += "<div style=\"font-weight: bold; margin-top: 5px;\">START of PUT tests</div>";
    var outputOfUpdateById = updateById();
    collectedOutput += "<div style=\"margin-left: 20px;\">> " + outputOfUpdateById + "</div>";
    var outputOfUpdateByIdWithViolatingPayloadValidations = updateByIdWithViolatingPayloadValidations();
    collectedOutput += "<div style=\"color: red; margin-left: 20px;\">> " + outputOfUpdateByIdWithViolatingPayloadValidations + "</div>";
    var outputOfPutWithServerError = putWithServerError();
    collectedOutput += "<div style=\"color: red; margin-left: 20px;\">> " + outputOfPutWithServerError + "</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">END of PUT tests</div>";
    collectedOutput += "<div style=\"font-weight: bold;\">#############################################################################</div>";

    collectedOutput += "<div style=\"font-weight: bold; margin-top: 30px;\">Tests are done successfully 🚀</div>";

    document.getElementById("experimentOutput").innerHTML = collectedOutput;
}