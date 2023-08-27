
function calulate(){
    const condition=document.getElementById("condition")
    const result=document.getElementById("answer");
const weight= parseInt((document.getElementById("weight")).value);
const feet= parseInt((document.getElementById("feet")).value);
const inches= parseInt((document.getElementById("inches")).value);
const value2= (feet+ (inches/12))*0.3048;
const answer = ((weight/(value2*value2) ).toFixed(2));
result.innerText= `BMI :${answer}`

if (answer<15.6)
condition.innerText="your underwieight";
    
// else if(answer>=18 && answer<22)
// document.write("your underwieight");
    
else if(answer>=22 && answer<25)
condition.innerText="your normal in wieight";
    
else{
    condition.innerText="your motta";
}

}