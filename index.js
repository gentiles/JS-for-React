import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchPromise = fetch(url);

fetchPromise
    .then((response) => response.json())
    .then((response) => console.log (response));
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))