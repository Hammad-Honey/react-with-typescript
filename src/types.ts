//Types in  TS 
let MyName:string="Hammad";
let LargeNumber:bigint=BigInt("12930283092183093432432432")
const is18:boolean=true


console.log(LargeNumber);
console.log(MyName);
console.log('he is 18'+is18);



const id:symbol=Symbol('id');


const user={
    [id]:123,
    name:'MyName'
}
console.log(user)



console.log(typeof(LargeNumber))



//Advance Types in TS

//Arrays
const number:Number[]=[1,2,3]; //number Array in TS
const names:Array<string>=["Ali","bob","mech"];

console.log(number,names)
//Enums
//Enum is used to prevent Invalid values to function(arg).
//Dark _ Light _ System /Example

// enum Theme{
//     Dark="DARK",
//     Light="LIGHT",
//     System="SYSTEM",
// }


// const Background_color=Theme.Dark
// console.log(Background_color)  :OUTPUT = DARK
 
//enum will show error about Eraseable Syntax Only _ To avoid that use TYPE

type Theme= 'DARK' | 'LIGHT' | 'SYSTEM';

function setTheme(Theme:Theme){
    return Theme;
}

console.log(setTheme('LIGHT'))


//INTERFACE IN TS

interface User{
    id:string,
    Name:string,
    Age?:number
}

//Type Aliases
 type Animal={
    name:string,
 }

 //Extending Aliases
 type Dog = Animal & {
    age:number,

 }

 const Mydog:Dog={"name":"Alfa",'age':6}
 console.log(Mydog)

 const User1:User={
    id:'1',
    Name:"beto"

    
 }
 console.log(User1)


 //Void 
 function returnVoid():void{
    console.log("This is Void Function");
 }

 returnVoid();
const voidfun:  ()=>void=()=> {console.log("Void Arrow function");}
console.log(voidfun)

//unknown Any-Thype
function anytype(a:any):any{
    return a;
}
console.log(anytype("alfa"))
