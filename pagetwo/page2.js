                                            //quiz one
const changebase = (input,frombase,tobase)=>{
let output = " ";
if (input !== undefined) {
    try {
        if (tobase >= 2 && frombase <= 36) {
            output = parseInt(input, frombase).toString(tobase);
        }
    } catch (error) {
    return error.message
    }
    
}else{
    console.log("value undefined")
}
return output;
}
console.log(changebase(10,10,2));

                                            //quiz 2
 const binary = "101101";
const convtbinnum = (bin)=>{
    [...bin].every((item)=>{
        if (item == "0" || item == "1") {
            //check if its a binary then convert
            console.log(" is a binary");
            decimal = parseInt(binary, 2);
        console.log(decimal);
        }else{
            console.log("not a binary ")
        }
    })
}
convtbinnum(binary)
                                                //quiz 3
const dectobho = (dec,bs)=>{
    switch (bs)  
    {  
    case 'BIN':  
    return parseInt(dec, 10).toString(2);
    break;  
    case 'HEX':  
    return parseInt(dec, 10).toString(16);
    break;  
    case 'OCT':  
    return parseInt(dec, 10).toString(8);
    break;  
    default:  
    return("TRY ANOTHER VALUE");  
    }  
}
const binaryvalue = dectobho(10,"BIN");
const hexvalue = dectobho(10,"HEX");
const octalvalue = dectobho(10,"OCT");
console.log(binaryvalue,hexvalue,octalvalue);

                                            //quiz 4
const dice1 = Math.trunc(Math.random()*10);
const dice2 =Math.trunc(Math.random()*10);
console.log(typeof(dice1),typeof(dice2));
const rollDice = (diceone,dicetwo)=>{
if(diceone === dicetwo){
    return "equal"
}
else{
    return "sorry try again to roll thice dice "
}
}
console.log(rollDice(dice1,dice2));

                                       //quiz 5
//recursion used
const  gcdtwonum = function(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
console.log(gcdtwonum(8,12));

                                 //quiz 6
//used recusion
const getlcm = (x,y)=>{
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / getgcd(x, y));
}
 function getgcd(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     let t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log(getlcm(3,15));
 console.log(getlcm(8,12));

                                        //quiz 7
 const getroman = (num)=> {
    if (typeof num !== 'number') 
    console.log("not a number")
    let dgt = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"],
    romannum = "",
    i = 3;
    while (i--)
    romannum = (key[+dgt.pop() + (i * 10)] || "") + romannum;
    return Array(+dgt.join("") + 1).join("M") + romannum;
    }
console.log(getroman(10));

//convert roman to integer
const getromantodec = (str1)=>{
    if(str1 == null) return -1;
    let num = chartoint(str1.charAt(0));
    let pre, curr;
    for(let i = 1; i < str1.length; i++){
    curr = chartoint(str1.charAt(i));
    pre = chartoint(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
}
    return num;
    }
    
    function chartoint(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }
    console.log(getromantodec("D"));


                                           //quiz 8
 const getprimefactors = (max)=>{
     //define all letiable
    let store  = [];
    let i;
    let j;
    let primeno = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
              //push in the array 
            primeno.push(i);
            for (j = i < 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primeno;
}
console.log(getprimefactors(20));

                                              //quiz 9
//Daily rate
const dailyRate = (hrs)=>{
return 8 * hrs;
}

const dayrate = dailyRate(7.45);
console.log(dayrate.toFixed(2));

//mthly rate
const mthlyRate = (dailyrate,disc)=>{
const mthrate  = dailyrate - disc;
return mthrate
}

const  monthlyrate =  mthlyRate(dayrate,30);
console.log(monthlyrate.toFixed(2));

     //days a freelancer can work depending on budget

const daystowork = (budget,rate,disc)=>{
//get daily rate
const dailyrate = 8 * rate;
console.log(dailyrate);
//get mthly rate
const mthlyrate = dailyrate - disc;
console.log(mthlyrate);
//divide with total budget
const contractdays = budget / mthlyrate;
return `Days of work are:${Math.trunc(contractdays)}`;
}
 const freedur = daystowork(2000,6,20);
console.log(freedur);


                                               //quiz 10
//book store
const cost = (group1,group2)=>{
let bookcost = 80;
let shoppingcost ;
if(group1 <= 5 && group2 <= 3  ){
const group1cost =  (bookcost - (bookcost *  25/100)) * group1 ;
const group2cost = (bookcost-(bookcost * 10/100))* group2;
shoppingcost = group1cost + group2cost;
return shoppingcost
}
}
console.log(cost(5,3));