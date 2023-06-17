// What is a Promise in JavaScript and how does it work? Explain the states of a Promise. Explain how to chain multiple Promises together and the syntax for doing so.


    // --> A Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future.
    //
    // --> A Promise has three states: Pending (value not available yet), Fulfilled (value available), and Rejected (an error occurred and value not available).
    //
    // --> You can chain multiple Promises together using the then() method.
    //
    // --> The then() method returns a new Promise that is resolved with the value returned by the function provided to it.
    //
    // --> If any errors occur during the chain, they will be caught by the final catch() method.


function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ?');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error occurred :', error);
        });
}

fetchData('https://jsonplaceholder.typicode.com/users')
    .then(users => {
        const userIds = users.map(user => user.id);
        return fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userIds.join(',')}`);
    })
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });