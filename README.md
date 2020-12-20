
Example client-usage:

fetch("http://localhost:3000/api/v1/health")
    .then(r => r.json().then(data => ({status: r.status, body: data})))
.then(obj => console.log(obj));
