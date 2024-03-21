let dogList = [];
const api = "https://dogapi.dog/api-docs/v2/swagger.json";

const fetchUsers = async (url = api) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    userList = data.results;

    display(userList);
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();

const display = () => {
  let dogCard = "";
  console.log(dogList);
};
