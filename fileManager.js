const filePath = './data/users.json';

const fileManager = require('fs');

let usersList = null;
// let userId = 50;
fileManager.readFile(filePath,"utf-8",function(error,data){
    if(error){
        console.log("I could not read the file");
    }
    let newUser = {
        // "Id": userId++,
        "name":"Aya",
        "email": "lucas.corradini.2003@gmail.com"
    }

    usersList = JSON.parse(data);
    usersList.push(newUser);
    fileManager.writeFileSync(filePath,JSON.stringify(usersList));
});

// export default fileManager;