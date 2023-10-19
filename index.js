// Write your solution in this file!
 const employee = {
     name: "Sophie",
     streetAddress: "223 Air St",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const updateEmployee = {...employee}
    updateEmployee["name"] = "Sam",
    updateEmployee["streetAddress"] = "11 Broadway"
    return updateEmployee

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee["streetAddress"] = "12 Broadway"
    return employee }

      
function deleteFromEmployeeByKey(employee,key){
let newEmployee = {...employee};
delete newEmployee["name"];
return newEmployee; }

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee; }
