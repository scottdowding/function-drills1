function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Scott', 39);
console.log(greeting1);