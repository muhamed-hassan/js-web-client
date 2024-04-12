
class EmployeeResourceClient {

    constructor() {
        this.httpClient = new HttpClient();
    }

    findById() {    
        var response;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            response = this.httpClient.doGet("http://localhost:8080/v2/employees/1", requestHeaders);        
            var parsedResponse = JSON.parse(response);
            var savedEmployee = new SavedEmployee();
            savedEmployee.id = parsedResponse.id;
            savedEmployee.name = parsedResponse.name;
            savedEmployee.title = parsedResponse.title;        
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.findById()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "EmployeeResourceClient.findById() response:: " + response;
    }
    
    findByPage() {
        var response;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            response = this.httpClient.doGet("http://localhost:8080/v2/employees?pageNumber=1&pageSize=10", requestHeaders);        
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
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.findByPage()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "EmployeeResourceClient.findByPage() response:: " + response;
    }
    
    getWithServerError() {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            this.httpClient.doGet("http://localhost:8080/v2/employees/server_error", requestHeaders);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.getWithServerError()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
    }
    
    /* ****************************************************************************************************************** */
    /* ****************************************************************************************************************** */
    
    save() {
        var requestPayload;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "sample name";
            newEmployee.title = "sample title";
            requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPost("http://localhost:8080/v2/employees", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.save()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "EmployeeResourceClient.save() requestPayload:: " + requestPayload;
    }
    
    saveWithViolatingPayloadValidations() {
        var requestPayload;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "";
            newEmployee.title = "sample title";
            requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPost("http://localhost:8080/v2/employees", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.saveWithViolatingPayloadValidations()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
    }
    
    postWithServerError() {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "sample name";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPost("http://localhost:8080/v2/employees/server_error", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.postWithServerError()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }    
    }
    
    /* ****************************************************************************************************************** */
    /* ****************************************************************************************************************** */
    
    deleteById() {
        try {       
            this.httpClient.doDelete("http://localhost:8080/v2/employees/51");
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.deleteById()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "Delete is done for employee with ID 51";
    }
    
    deleteWithServerError() {
        try {       
            this.httpClient.doDelete("http://localhost:8080/v2/employees/server_error");
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.deleteWithServerError()";
            console.error(errMsg);
            console.error(error + "\n\n"); 
            return errMsg;       
        }
    }
    
    /* ****************************************************************************************************************** */
    /* ****************************************************************************************************************** */
    
    updateById() {
        var requestPayload;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "sample name";
            newEmployee.title = "sample title";
            requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPut("http://localhost:8080/v2/employees/91", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.updateById()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "EmployeeResourceClient.updateById() requestPayload:: " + requestPayload;
    }
    
    updateByIdWithViolatingPayloadValidations() {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPut("http://localhost:8080/v2/employees/91", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.updateByIdWithViolatingPayloadValidations()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
    }
    
    putWithServerError() {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "sample name";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPut("http://localhost:8080/v2/employees/server_error", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.putWithServerError()";
            console.error(errMsg);
            console.error(error + "\n\n");  
            return errMsg;
        }    
    }

}