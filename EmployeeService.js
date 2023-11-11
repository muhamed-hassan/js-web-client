function findById() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        var response = doGet("http://localhost:8080/v2/employees/1", requestHeaders);        
        var parsedResponse = JSON.parse(response);
        var savedEmployee = new SavedEmployee();
        savedEmployee.id = parsedResponse.id;
        savedEmployee.name = parsedResponse.name;
        savedEmployee.title = parsedResponse.title;
        console.log("EmployeeService.findById() response:: " + response);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.findById()");
        console.error(error + "\n\n");        
    }
}

function findByPage() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        var response = doGet("http://localhost:8080/v2/employees?pageNumber=1&pageSize=10", requestHeaders);        
        var parsedResponse = JSON.parse(response);
        var collectedElements = new Array();
        for (var cursor = 0; cursor < parsedResponse.length; cursor++) {
            var savedEmployee = new SavedEmployee();
            savedEmployee.id = parsedResponse[cursor].id;
            savedEmployee.name = parsedResponse[cursor].name;
            savedEmployee.title = parsedResponse[cursor].title;
            collectedElements.push(savedEmployee);            
        }
        console.log("EmployeeService.findByPage() response:: " + response);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.findByPage()");
        console.error(error + "\n\n");        
    }
}

function getWithServerError() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        doGet("http://localhost:8080/v2/employees/server_error", requestHeaders);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.getWithServerError()");
        console.error(error + "\n\n");        
    }
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */

function save() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "sample name";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        console.log("EmployeeService.save() requestPayload:: " + requestPayload);
        doPost("http://localhost:8080/v2/employees", requestHeaders, requestPayload);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.save()");
        console.error(error + "\n\n");        
    }
}

function saveWithViolatingPayloadValidations() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        console.log("EmployeeService.saveWithViolatingPayloadValidations() requestPayload:: " + requestPayload);
        doPost("http://localhost:8080/v2/employees", requestHeaders, requestPayload);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.saveWithViolatingPayloadValidations()");
        console.error(error + "\n\n");        
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
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.postWithServerError()");
        console.error(error + "\n\n");        
    }    
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */

function deleteById() {
    try {       
        doDelete("http://localhost:8080/v2/employees/51");
        console.log("Delete is done for employee with ID 51");
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.deleteById()");
        console.error(error + "\n\n");        
    }
}

function deleteWithServerError() {
    try {       
        doDelete("http://localhost:8080/v2/employees/server_error");
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.deleteWithServerError()");
        console.error(error + "\n\n");        
    }
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */

function updateById() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "sample name";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        console.log("EmployeeService.updateById() requestPayload:: " + requestPayload);
        doPut("http://localhost:8080/v2/employees/91", requestHeaders, requestPayload);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.updateById()");
        console.error(error + "\n\n");        
    }
}

function updateByIdWithViolatingPayloadValidations() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var newEmployee = new NewEmployee();
        newEmployee.name = "";
        newEmployee.title = "sample title";
        var requestPayload = JSON.stringify(newEmployee);
        console.log("EmployeeService.updateByIdWithViolatingPayloadValidations() requestPayload:: " + requestPayload);
        doPut("http://localhost:8080/v2/employees/91", requestHeaders, requestPayload);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.updateByIdWithViolatingPayloadValidations()");
        console.error(error + "\n\n");        
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
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.putWithServerError()");
        console.error(error + "\n\n");        
    }    
}