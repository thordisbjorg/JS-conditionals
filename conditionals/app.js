//Object in an array
var people = [{
    firstName: "Britney", lastName: "Lodge",
    born: new Date("06/11/1989"), numberChildren: 4, bornIn: "Philippines", program: true
},

{
    firstName: "Ciel", lastName: "Joselvitch",
    born: new Date("10/28/1992"), numberChildren: 2, bornIn: "China", program: true
},

{
    firstName: "Turner", lastName: "Kerner",
    born: new Date("08/25/1988"), numberChildren: 1, bornIn: "France", program: true
},

{
    firstName: "Ellert", lastName: "Studdard",
    born: new Date("03/29/1990"), numberChildren: 4, bornIn: "China", program: false
},

{
    firstName: "Lanae", lastName: "Perceval",
    born: new Date("06/09/1982"), numberChildren: 1, bornIn: "Panama", program: true
}]
console.log(people[0])
console.log(people[4])

//Is the first person older than the last person?
if (people[0].born > people[4].born) {
    console.log("person4 is older than person 0")
} else {
    console.log("person4 is not older than person 0")
}
//Does the 2nd person have the same amound of kids ad the 3rd person?
if (people[1].numberChildren === people[2].numberChildren) {
    console.log("person1 has as many children as person2")
} else {
    console.log("person1 does not have as many children as person2")
}
//Do both persons know how to program? yes = "yay!"", no=“LMGTFY”
if (people[0].program && people[3].program) {
    console.log("yay!")

} else {
    console.log("LMGTFY")

}

//Check the 2nd person in the array for thei nationality
switch (people[1].bornIn) {
    case "Iceland":
        console.log("Hæ")
        break;
    case "Spain":
        console.log("Hola")
        break;
    case "Korea":
        console.log("여보세요")
        break;
    default:
        console.log("Hello")
}

//Ternary operator to output of the 2nd person's last name is longer than 5 charactes
(people[1].firstName.length > 5) ? console.log("the second persons first name is longer than 5 characters") :
    console.log("the second persons name is not longer than 5 characters")

