
function launcher() {    

    var employeeResourceClient = new EmployeeResourceClient();
 
    // GET tests
    var collectedOutput = "<div class=\"tests-package-container\">START of GET tests</div>";
    var outputOfFindById = employeeResourceClient.findById();
    collectedOutput += "<div class=\"correct-response\">> " + outputOfFindById + "</div>";
    var outputOfFindByPage = employeeResourceClient.findByPage();
    collectedOutput += "<div class=\"correct-response\">> " + outputOfFindByPage + "</div>";
    var outputOfGetWithServerError = employeeResourceClient.getWithServerError();
    collectedOutput += "<div class=\"wrong-response\">> " + outputOfGetWithServerError + "</div>";
    collectedOutput += "<div class=\"tests-package-container\">END of GET tests</div>";

    collectedOutput += "<div class=\"tests-separator\">#############################################################################</div>";
    
    // POST tests    
    collectedOutput += "<div class=\"tests-package-container\">START of POST tests</div>";
    var outputOfLogin = employeeResourceClient.login();
    collectedOutput += "<div class=\"correct-response\">> " + outputOfLogin + "</div>";
    var outputOfSave = employeeResourceClient.save();
    collectedOutput += "<div class=\"correct-response\">> " + outputOfSave + "</div>";
    var outputOfSaveWithViolatingPayloadValidations = employeeResourceClient.saveWithViolatingPayloadValidations();
    collectedOutput += "<div class=\"wrong-response\">> " + outputOfSaveWithViolatingPayloadValidations + "</div>";
    var outputOfPostWithServerError = employeeResourceClient.postWithServerError();
    collectedOutput += "<div class=\"wrong-response\">> " + outputOfPostWithServerError + "</div>";
    collectedOutput += "<div class=\"tests-package-container\">END of POST tests</div>";

    collectedOutput += "<div class=\"tests-separator\">#############################################################################</div>";
    
    // DELETE tests
    collectedOutput += "<div class=\"tests-package-container\">START of DELETE tests</div>";
    var outputOfDeleteById = employeeResourceClient.deleteById();
    collectedOutput += "<div class=\"correct-response\">> " + outputOfDeleteById + "</div>";
    var outputOfDeleteWithServerError = employeeResourceClient.deleteWithServerError();
    collectedOutput += "<div class=\"wrong-response\">> " + outputOfDeleteWithServerError + "</div>";
    collectedOutput += "<div class=\"tests-package-container\">END of DELETE tests</div>";

    collectedOutput += "<div class=\"tests-separator\">#############################################################################</div>";

    // PUT tests
    collectedOutput += "<div class=\"tests-package-container\">START of PUT tests</div>";
    var outputOfUpdateById = employeeResourceClient.updateById();
    collectedOutput += "<div class=\"correct-response\">> " + outputOfUpdateById + "</div>";
    var outputOfUpdateByIdWithViolatingPayloadValidations = employeeResourceClient.updateByIdWithViolatingPayloadValidations();
    collectedOutput += "<div class=\"wrong-response\">> " + outputOfUpdateByIdWithViolatingPayloadValidations + "</div>";
    var outputOfPutWithServerError = employeeResourceClient.putWithServerError();
    collectedOutput += "<div class=\"wrong-response\">> " + outputOfPutWithServerError + "</div>";
    collectedOutput += "<div class=\"tests-package-container\">END of PUT tests</div>";

    collectedOutput += "<div class=\"tests-separator\">#############################################################################</div>";

    collectedOutput += "<div class=\"result-of-tests\">Tests are done successfully 🚀</div>";

    document.getElementById("experimentOutput").innerHTML = collectedOutput;
}