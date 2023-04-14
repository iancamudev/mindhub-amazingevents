// let data;
// let connection = async () => {
//   data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
//     .then((response) => {
//       response.json();
//     })
//     .then((response) => console.log(response));
// };
// connection();

function fetchData() {
  return fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
