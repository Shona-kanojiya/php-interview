fetch("https://fake-json-api.mock.beeceptor.com/users")
.then(res => res.json())
.then(data => {
    data.map((data) => {
        console.log(data.email)
    })
})
.catch(error => console.error(error))