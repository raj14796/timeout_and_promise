console.log("Start");

function loginUSer(username,password){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Now we have data");
            resolve ({username:username});
        },3000);
    })
}

function getVideos(username){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(["video1","video2","video3"]);
        },2000);
    })
    
}


async function displayUser(){
    try{
        const loginUSer1 = await loginUSer("ravi","ravi123");
        const videos1 = await getVideos(loginUSer1);
        console.log(loginUSer1);
        console.log(videos1);
    }
    catch(err){
        console.log("we could not get the videos");
    }
}
displayUser();


console.log("End");