
console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Ramesh"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Suresh"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length >= hacker2.length){
    if(hacker1.length == hacker2.length){
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
    else{
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
}else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let ans = ''
let ans2 = ''

for (let i = 0; i < hacker1.length; i++) {
    ans+= hacker1[i].toUpperCase() + " ";
}

for (let i = hacker2.length-1; i > -1; i--) {
    ans2+= hacker2[i];
}
console.log(ans)
console.log(ans2)