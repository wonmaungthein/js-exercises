var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function mentorName (name){
    return name
};

function greetingMentor (name){ 
    const message = `Hello ${mentorName (name)}.`
    return message.toUpperCase();
}

console.log(greetingMentor(mentor1));
console.log(greetingMentor(mentor2));
console.log(greetingMentor(mentor3));
console.log(greetingMentor(mentor4));
console.log(greetingMentor(mentor5));

// DONE;