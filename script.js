const messageStack = (first,second,third) => {
    stack1 = ["Embrace the journey of", "Unlock your potential", "Harness your inner strength to"];
    stack2 = ["achieve greatness.", "overcome any obstacle.", "make a positive impact."];
    stack3 = ["You are capable of amazing things!", "Dreams become reality through determination.", "Remember, every step forward counts."];

    console.log(`${stack1[first]} ${stack2[second]} ${stack3[third]}`);
}

const generateMsgP1 = () => {
    return Math.floor(Math.random()*2);
}

const generateMsgP2 = () => {
    return Math.floor(Math.random()*2);
}

const generateMsgP3 = () => {
    return Math.floor(Math.random()*2);
}

const messageGenerator = () => {
    let firstPart = generateMsgP1();
    let secondPart = generateMsgP2();
    let thirdPart = generateMsgP3();
    messageStack(firstPart, secondPart, thirdPart);
}
messageGenerator();

