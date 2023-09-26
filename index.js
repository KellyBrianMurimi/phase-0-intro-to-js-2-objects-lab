// Write your solution in this file!
const employee = {
    name:"Kelly",
    streetAddress:"K-West road"
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj;

}

const newestObj= updateEmployeeWithKeyAndValue(employee,"name", "Brian");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

  return obj;
}

const otherObj= destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress", "Birmingham");

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    
    return employee;
    
}

function deleteFromEmployeeByKey(employee,key){
    const oldestObj= { ...employee };
    delete oldestObj.name;
    //oldestObj[key] = value;
    return oldestObj;
}