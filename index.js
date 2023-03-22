const hasError = true;

const displayMessage = new Promise((resolve,reject)=>{
    if(hasError)
        reject("Some Error has occured");
    else
        resolve("This is the new message");
})

displayMessage.then(message => {
    console.log(message)
})
.catch(err=>{
    console.log(err)
})