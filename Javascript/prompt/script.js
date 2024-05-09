const p = prompt("Enter your age: ");


if(p >= 18) document.querySelector("h1").innerHTML = 'You are old enough to drive';
else document.querySelector("h1").innerHTML = `Wait for ${18-p} years till you turn 18`;