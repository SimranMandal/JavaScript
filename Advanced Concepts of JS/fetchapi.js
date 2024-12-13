/*
fetch('https:www.google.com')
.then(res => res.text())
.then(data => console.log(data));
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data));

*/

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if(!response.ok){
        throw new Error (`Network response was not ok ` + response.statusText)
    }
    return response.json();
  })
  .then(data => console.log(data));
  //.catch(error => console.log(error));
