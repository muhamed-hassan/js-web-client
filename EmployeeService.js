function findById() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        var response = doGet("http://localhost:8080/v2/employees/1", requestHeaders);
        console.log("EmployeeService.findById() parsed response:: ");
        var parsedResponse = JSON.parse(response);
        var savedEmployee = new SavedEmployee();
        savedEmployee.id = parsedResponse.id;
        savedEmployee.name = parsedResponse.name;
        savedEmployee.title = parsedResponse.title;
        console.log(savedEmployee);
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
        console.log("EmployeeService.findByPage() parsed response:: ");
        var parsedResponse = JSON.parse(response);
        var collectedElements = new Array();
        for (var cursor = 0; cursor < parsedResponse.length; cursor++) {
            var savedEmployee = new SavedEmployee();
            savedEmployee.id = parsedResponse[cursor].id;
            savedEmployee.name = parsedResponse[cursor].name;
            savedEmployee.title = parsedResponse[cursor].title;
            collectedElements.push(savedEmployee);            
        }
        console.log(collectedElements);
    } catch (error) {
        console.error("Encountered an error during communicating with the backend. SOURCE::EmployeeService.findByPage()");
        console.error(error + "\n\n");        
    }
}

function getWithServerError() {
    try {       
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        var response = doGet("http://localhost:8080/v2/employees/server_error", requestHeaders);
    } catch (error) {
        console.error(error + "\n\n");        
    }
}

/* ****************************************************************************************************************** */
/* ****************************************************************************************************************** */