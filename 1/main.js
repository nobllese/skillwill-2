const users = [{
    name : 'Temo',
    age: 25
}, {
    name: 'Lasha',
    age: 21
}, {
    name: 'Ana',
    age: 28
}
]

let minAge = 9999;
let name; 

users.forEach((user) => {  
                          
    if (user.age < minAge){    
        name = user.name;      
        minAge = user.age;
    }
});

console.log(name); 
