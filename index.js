// import fetch from "node-fetch";
 /////sample program on Fetch
// const url = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchPromise = fetch(url);

// fetchPromise
//     .then((response) => response.json())
//     .then((response) => console.log (response));

   

///////////// Async & await

// const fetchPromise = async ()=>{
//     const res = await fetch(url)
//     const response = await res.json();
//     console.log(response)
// }
// fetchPromise()

/////////////// Module

import message from "./person.js"
console.log(message())