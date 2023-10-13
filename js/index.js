
console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Ramesh"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Auresh"
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

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
}
else if(hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely")
}
else{
    console.log("What?! You both have the same name")
}

// BONUS 1

let bonus = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a eros sit amet lorem tempus volutpat eu eget nunc. Curabitur felis nisi, consequat ut feugiat et, bibendum a nulla. Duis est erat, facilisis quis lectus ac, malesuada gravida ex. Donec eget aliquam nunc. Sed mattis pulvinar ex eget maximus. In ultrices at elit a cursus. Aliquam tellus dui, semper ut viverra id, vestibulum vitae erat. Quisque lobortis, ante a sodales sagittis, purus arcu interdum enim, non elementum sem eros ac magna.
Curabitur sit amet erat sit amet quam lacinia cursus ut non lectus. Duis ac pellentesque sapien. Fusce egestas congue maximus. Sed dictum finibus libero vehicula gravida. Quisque eu diam quis tellus volutpat lacinia. Suspendisse commodo neque sed nisl rhoncus tristique. Etiam elementum eu metus eu bibendum. Sed sit amet faucibus dolor, nec feugiat arcu.
Etiam rhoncus arcu nec lorem pretium hendrerit. Duis vulputate malesuada viverra. Vestibulum vel justo id leo facilisis dapibus. Praesent vitae urna porttitor, porttitor eros non, tempus libero. Praesent eget blandit enim, at mattis metus. Donec interdum elit in metus facilisis, varius euismod sem dignissim. Phasellus quis elit volutpat, congue felis vitae, laoreet nisl. Integer varius urna vel faucibus ultrices. Phasellus nec elementum sem. Vivamus vehicula purus vitae magna laoreet, id commodo magna viverra. Ut sit amet congue justo. Suspendisse congue ut lorem et imperdiet. Duis ac varius lorem.
`

