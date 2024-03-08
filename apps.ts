// Unary operators // post increment //
let a = 0;
 console.log(a);      //0
console.log(a);  //0
console.log(a++);   //
console.log(a);  // 1
console.log(a);  // 1
console.log(a++); // 1
console.log(a);  //2

// pre increment //
// post increment //

let b = 3;
 console.log(++b); // pre increment //
console.log(b = b * 10);  // 40

//   post decrement //
let c = 9
 console.log(--c);  // 8
let d = 10
console.log(d--); //10

let e = 30
console.log(e--);   //30
console.log(e);    //29
console.log(e = e -15);  // 14

let h = 40;
 console.log(h--);   //40
 console.log(h);   //39
 console.log(h--);    //39
 console.log(h);   //38
console.log(h + 1);   //39
console.log(h = h + 1);     //39
console.log(h--);   //39
 console.log(h);      //38


let number1: number  = 20;
console.log((++number1) + (++number1)); // 43

console.log((number1++) + (number1++) + number1); // 63


console.log((++number1) + (number1++));
             // 21      +    22 =   43

             console.log((++number1) + (number1++) + (number1));
                          // 21      +   22         + 21 =    64


                          let variable1 = number1++; // 22
                          let variable2 = --number1; // 21
                          let variable3 = ++number1; // 22

                        console.log(variable1 + variable2 - variable3);
                                   // 22       + 21 = (43) - 22 = (21)








