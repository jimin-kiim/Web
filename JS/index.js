const age = parseInt( prompt("How old are you?"));//parseInt: string -> int if the string doesn't represent a numeric, it returns NaN 
console.log(isNaN(age));//isNaN returns boolean.

if (isNaN(age)){
    console.log("Please write a number");
}else{
    console.log("Thank you for writing you age");

}
