let dogList = [];
const api = "https://dogapi.dog/api/v2/breeds";
const dogListELm = document.getElementById("list");

const fetchDogs = async (url = api) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dogList = data.message;

    display(dogList);
  } catch (error) {
    console.log(error);
  }
};

fetchDogs();

const display = (dogList) => {
  let dogCard = "";
  console.log(dogList);

  dogList.forEach((dog) => {
    dogCard += `<div class="card" style="width: 18rem">
    <img src="${dog}" class="card-img-top" alt="Dog Image" />
    <div class="card-body">
      <h5 class="card-title">Name</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
  </div> `;
  });
  dogListELm.innerHTML = dogCard;
  document.getElementById("dogCount").innerText = dogList.length;
};
