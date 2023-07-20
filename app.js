//------------------------------
//დავალება-1:
//------------------------------
console.log("- დავალება 1 -");

for (let i= 0; i<=50; i++ ) {
    console.log(i);
}

//------------------------------
//დავალება-2:
//------------------------------
console.log("- დავალება 2 -");

let a = 0;
while (a<=20) {
    console.log(a);
    a++;
}

//------------------------------
//დავალება-3:
//------------------------------
console.log("- დავალება 3 -");

let b = 0;
do {
    console.log(b)
    b++;
}
while (b<=30);

//------------------------------
//დავალება-4:
//------------------------------
console.log("- დავალება 4 -");

const numbers = [1,2,5,7,8,10,23,24,26];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
   console.log(num);
  }
}
console.log(num);

//------------------------------
//დავალება-5:
//------------------------------
console.log("- დავალება 5 -");

const currentDay = new Date().getDay();

switch (currentDay) {
	case 0:
		console.log("კვირა");
		break;
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
}

//------------------------------