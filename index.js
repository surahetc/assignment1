// ----------------------------TASK 1 PROMISE---------------------------------------

const hasError = false;

const displayMessage = new Promise((resolve,reject)=>{
    if(hasError)
        reject("Some Error has occured");
    else
        resolve("PROMISE MESSAGE : This is the new message");
})

displayMessage.then(message => {
    console.log(message)
})
.catch(err=>{
    console.log(err)
})



// ----------------------------TASK 2 FILESYSTEM---------------------------------------


const fs = require('fs').promises;

const createFile = async function(){
    try{
        await fs.writeFile('newFile.txt','New content');
        console.log("newFile.txt created")
    }
    catch(err){
        console.log(err);
    }
}

createFile();