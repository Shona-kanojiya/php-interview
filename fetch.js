fetch("https://fake-json-api.mock.beeceptor.com/users")
.then(res => res.json())
.then(data => {
    data.map((data) => {
        console.log(data.email)
    })
})
.catch(error => console.error(error));

fetch("https://fake-json-api.mock.beeceptor.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com"
  })
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});

// 🔹 What is fetch?
// fetch is a built-in JavaScript function used to make HTTP requests (GET, POST, etc.)
// Available in browsers and in Node.js (v18+)
// 🔹 Key points about fetch
// Returns a Promise
// Always returns a Promise
// Resolves to a Response object
// Used for API calls
// Commonly used to get/send data from/to servers

// Default method is GET

// fetch(url)

// Can send other methods

// fetch(url, { method: "POST" })
// Does NOT reject on HTTP errors
// 404 / 500 → still goes to .then
// Only network errors go to .catch

// Response needs parsing

// You must convert it:
// res.json()
// res.text()
// res.ok helps detect success
// true → status 200–299
// false → error status

// Supports async/await

// const res = await fetch(url);

// Can send headers & body

// fetch(url, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data)
// });
// CORS restrictions apply (browser)
// Requests may fail if server doesn’t allow origin