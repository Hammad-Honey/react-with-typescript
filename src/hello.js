var _a;
//Types in  TS 
var MyName = "Hammad";
var LargeNumber = BigInt("12930283092183093432432432");
var is18 = true;
console.log(LargeNumber);
console.log(MyName);
console.log('he is 18' + is18);
var id = Symbol('id');
var user = (_a = {},
    _a[id] = 123,
    _a.name = 'MyName',
    _a);
console.log(user);
console.log(typeof (LargeNumber));
//Advance Types in TS
//Arrays
var number = [1, 2, 3]; //number Array in TS
var names = ["Ali", "bob", "mech"];
console.log(number, names);
function setTheme(Theme) {
    return Theme;
}
console.log(setTheme('LIGHT'));
var Mydog = { "name": "Alfa", 'age': 6 };
console.log(Mydog);
