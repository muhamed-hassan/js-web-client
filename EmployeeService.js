function findById() {
    var response;
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        response = doGet("http://localhost:8080/v2/employees/1", requestHeaders);        
        var parsedResponse = JSON.parse(response);
        var savedEmployee = new SavedEmployee();
        savedEmployee.id = parsedResponse.id;
        savedEmployee.name = parsedResponse.name;
        savedEmployee.title = parsedResponse.title;        
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.findById()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
    return "EmployeeService.findById() response:: " + response;
}

function findByPage() {
    var response;
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        response = doGet("http://localhost:8080/v2/employees?pageNumber=1&pageSize=10", requestHeaders);        
        var parsedResponse = JSON.parse(response);
        var collectedElements = new Array();
        for (var cursor = 0; cursor < parsedResponse.length; cursor++) {
            var savedEmployee = new SavedEmployee();
            savedEmployee.id = parsedResponse[cursor].id;
            savedEmployee.name = parsedResponse[cursor].name;
            savedEmployee.title = parsedResponse[cursor].title;
            collectedElements.push(savedEmployee);            
        }
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.findByPage()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
    return "EmployeeService.findByPage() response:: " + response;
}

function getWithServerError() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        doGet("http://localhost:8080/v2/employees/server_error", requestHeaders);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.getWithServerError()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */

function save() {
    var requestPayload;
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "sample name";
        newEmployee.title = "sample title";
        requestPayload = JSON.stringify(newEmployee);
        doPost("http://localhost:8080/v2/employees", requestHeaders, requestPayload);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.save()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
    return "EmployeeService.save() requestPayload:: " + requestPayload;
}

function saveWithViolatingPayloadValidations() {
    var requestPayload;
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "";
        newEmployee.title = "sample title";
        requestPayload = JSON.stringify(newEmployee);
        doPost("http://localhost:8080/v2/employees", requestHeaders, requestPayload);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.saveWithViolatingPayloadValidations()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
}

function postWithServerError() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "sample name";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        doPost("http://localhost:8080/v2/employees/server_error", requestHeaders, requestPayload);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.postWithServerError()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }    
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */

function deleteById() {
    try {       
        doDelete("http://localhost:8080/v2/employees/51");
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.deleteById()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
    return "Delete is done for employee with ID 51";
}

function deleteWithServerError() {
    try {       
        doDelete("http://localhost:8080/v2/employees/server_error");
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.deleteWithServerError()";
        console.error(errMsg);
        console.error(error + "\n\n"); 
        return errMsg;       
    }
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */

function updateById() {
    var requestPayload;
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "sample name";
        newEmployee.title = "sample title";
        requestPayload = JSON.stringify(newEmployee);
        doPut("http://localhost:8080/v2/employees/91", requestHeaders, requestPayload);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.updateById()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
    return "EmployeeService.updateById() requestPayload:: " + requestPayload;
}

function updateByIdWithViolatingPayloadValidations() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        doPut("http://localhost:8080/v2/employees/91", requestHeaders, requestPayload);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.updateByIdWithViolatingPayloadValidations()";
        console.error(errMsg);
        console.error(error + "\n\n");        
        return errMsg;
    }
}

function putWithServerError() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "sample name";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        doPut("http://localhost:8080/v2/employees/server_error", requestHeaders, requestPayload);
    } catch (error) {
        var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeService.putWithServerError()";
        console.error(errMsg);
        console.error(error + "\n\n");  
        return errMsg;
    }    
}