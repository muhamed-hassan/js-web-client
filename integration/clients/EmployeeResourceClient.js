
class EmployeeResourceClient {

    constructor() {
        this.httpClient = new HttpClient();
        this.apiConfigs = new ApiConfigs();
    }

    findById() {    
        var response;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            response = this.httpClient.doGet(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/1", 
                                                requestHeaders);        
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
            response = this.httpClient.doGet(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "?pageNumber=1&pageSize=10", 
                                                requestHeaders);        
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
            this.httpClient.doGet(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/server_error", 
                                    requestHeaders);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.getWithServerError()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
    }
    
    /* ****************************************************************************************************************** */
    /* ****************************************************************************************************************** */
    
    login() {
        var username = "ethan_hunt"; 
        var password = "why_hell_exists???";
        var authorizationHeader;    
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            requestHeaders.set("Device-Type", "MOBILE");

            var requestPayload = JSON.stringify(new Credentials(username, password));

            authorizationHeader = this.httpClient.doPostForAuthentication(this.apiConfigs.getDnsHostOfAuthenticationComponent() + 
                                    this.apiConfigs.getAuthenticateApiPath(), requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.login()";
            console.error(errMsg);
            console.error(error + "\n\n");
            return errMsg;
        }
        return "EmployeeResourceClient.login() with Authorization-Header:: " + authorizationHeader;
    }

    save() {
        var statusText;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "sample name";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            statusText = this.httpClient.doPost(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath(), 
                                    requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.save()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "EmployeeResourceClient.save() with HTTP_Status-Code:: " + statusText;
    }
    
    saveWithViolatingPayloadValidations() {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPost(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath(), 
                                    requestHeaders, requestPayload);
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
            this.httpClient.doPost(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/server_error", 
                                    requestHeaders, requestPayload);
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
        var statusText;
        try {       
            statusText = this.httpClient.doDelete(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/51");
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.deleteById()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "Delete is done for employee with ID 51 with HTTP_Status-Code:: " + statusText;
    }
    
    deleteWithServerError() {
        try {       
            this.httpClient.doDelete(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/server_error");
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
        var statusText;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "sample name";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            statusText = this.httpClient.doPut(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/91", 
                                    requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.updateById()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "EmployeeResourceClient.updateById() with HTTP_Status-Code:: " + statusText;
    }
    
    updateByIdWithViolatingPayloadValidations() {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var newEmployee = new NewEmployee();
            newEmployee.name = "";
            newEmployee.title = "sample title";
            var requestPayload = JSON.stringify(newEmployee);
            this.httpClient.doPut(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/91", 
                                    requestHeaders, requestPayload);
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
            this.httpClient.doPut(this.apiConfigs.getDnsHost() + this.apiConfigs.getEmployeesApiPath() + "/server_error", 
                                    requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::EmployeeResourceClient.putWithServerError()";
            console.error(errMsg);
            console.error(error + "\n\n");  
            return errMsg;
        }    
    }

}