fetch("http://127.0.0.1:3000/api/users")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });
