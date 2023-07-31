let countvalue=document.querySelector('#counter');
/*let increment=function(){

}
increment();
*/
let increment=()=>{
    //get value from ui
let value =parseInt(countvalue.innerText);
//update the value
value++;
//set the value on ui
countvalue.innerText=value;
};


let decrement=()=>{
    //get value from ui
let value =parseInt(countvalue.innerText);
//update the value
value--;
//set the value on ui
countvalue.innerText=value;
};






