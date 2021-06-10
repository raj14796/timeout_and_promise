//1) setTimeout is asynchronous
// console.log("Start");

// setTimeout(()=>{
//     console.log(("I am in timeout"));
// },5000);

// console.log("End");


//2) all callbacks are not asynchronous
// console.log("Start");

// const items = [1,2,3,4,5];
// items.forEach((item)=>{
//     console.log(item);
// });

// console.log("End");


//3) user undefined
// console.log("Start");

// function loginUSer(username,password){
//     setTimeout(()=>{
//         console.log("Now we have data");
//         return {username:username};
//     },5000)
// }
// const user = loginUSer("ravi","ravi12");
// console.log("user : ",user);
// console.log("End");


// 4) solution of 3
// console.log("Start");

// function loginUSer(username,password,callback){
//     setTimeout(()=>{
//         console.log("Now we have data");
//         callback ({username:username});
//     },5000)
// }
// const user = loginUSer("ravi","ravi12",user1 => {
//     console.log("user : ",user1);
// });
// console.log("End");


//5) need for promise
console.log("Start");

function loginUSer(username,password,callback){
    setTimeout(()=>{
        console.log("Now we have data");
        callback ({username:username});
    },3000);
}

function getVideos(username,callback){
    setTimeout(()=> {
        callback(["video1","video2","video3"]);
    },2000);
}

const user = loginUSer("ravi","ravi12",user1 => {
    console.log("user : ",user1);
    getVideos("ravi",videos => {
        console.log(videos);
    })
});
console.log("End");