// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("got the user"); 
//         //resolve({user : "ravi"});
//         reject(new Error("User is not logged in"));
//     },2000);
// });

// promise
// .then((user) => {
//     console.log(user)
// })
// .catch((err) => {
//     console.log(err);
// })



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

loginUSer("ravi","ravi123").then((user)=>{
    console.log("user : ",user);
    return getVideos(user).then((videos) => {
         console.log(videos);
    })
})

// loginUSer("ravi","ravi123")
// .then((user)=>getVideos(user))
// .then((videos)=>console.log(videos))



console.log("End");