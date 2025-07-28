let fieldValidation=(key,value)=>{
    let nameRegex=/[a-zA-Z]{2,}\s[a-zA-z]{2,}/
    let emailRegex=/^[a-z0-9A-Z.-_%]+@[a-z]+(\.[a-z]{2,})$/
    let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W])[\S\W]{8,16}$/
    console.log(key+"   "+value);
    switch(key){
        case 'username':
        case 'name':
            console.log("<><>"+key);
            return nameRegex.test(value);
        case 'email':
            console.log("<><>"+key);
            return emailRegex.test(value);
        case 'password':
            console.log("<><>"+key);
            return passwordRegex.test(value);
        default:
            return false;
    }
}
let submitValidation=(checklist)=>{
    let isValid=false;
    console.log("Here is the checklist: ",checklist);
    for(let key in checklist){
        if(checklist[key]===false){
            return isValid;
        }
    }
    return !isValid;
}
export let handleInputChange=(event,dataCheck)=>{
    let fieldName=event.target.name;
    let fieldValue=event.target.value;
    if(fieldValidation(fieldName,fieldValue)){
        console.log("Valid")
        if(submitValidation(dataCheck)){
            console.log("Form is valid");
            return{status:true,fieldName:[fieldName],fullValid:true}
        }
        else{
            console.log("Form is not valid");
            return{status:true,fieldName:[fieldName],fullValid:false}
        }
    }
    else{
        console.log("Invalid")
        return {status:false,fieldName:[fieldName],fullValid:false}
    }
}