function Divisibles(count) {
  var output = [];
  var number = 1;
 while (number <= count) {
  if (number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {
    output.push("yu-gi-oh")
  }
  else if (number % 2 === 0) {
    output.push("yu")
  } else if (number % 3 === 0) {
    output.push("gi")
  } else if (number % 5 === 0) {
    output.push("oh")
  } else {
    output.push(number);
  }
   number++;
  }
  console.log(output);
}
Divisibles(100);
Divisibles(45);
// When i saw this task, i knew its fizzBuzz but didn't know how to go about calling function twice. 
// But thank God for google i was able to fix the error after several hours of trying. i learnt something knew.
// i almost cried but God no shame me o.
