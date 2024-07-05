for (let i = 1; i <= 100; i++) {
  // for loop för att iterera från 1 till 100 (i börjar på 1 och går upp till 100).
  if (i % 3 === 0 && i % 5 === 0) {
    // Checkar om i är delbart med 3 och 5.
    console.log("FizzBuzz"); // Om i är delbart med 3 och 5 print FizzBuzz
  } else if (i % 3 === 0) {
    console.log("Fizz"); // Om i är delbart med 3 print Fizz
  } else if (i % 5 === 0) {
    console.log("Buzz"); // Om i är delbart med 5 print Buzz
  } else {
    console.log(i); // Om ingen av de är sanna, print siffran i
  }
}
