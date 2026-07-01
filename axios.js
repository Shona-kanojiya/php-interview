import axios from "axios"
axios.get("https://fake-json-api.mock.beeceptor.com/users")
.then(res => {
    res.data.map((data) => {
        console.log(data.email)
    })
})
.catch(error => console.error(error))