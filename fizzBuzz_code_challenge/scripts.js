//loop will run until i is less than or equals to 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  } else if (i % 3 === 0) console.log("fizz");
  else if (i % 5 === 0) console.log("buzz");
  else console.log(i);
}
