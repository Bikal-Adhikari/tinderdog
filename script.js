let dogList = [];
const api = "https://dog.ceo/api/breeds/image/random/6";
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
  let i = 0;
  dogList.forEach((dog) => {
    dogCard += `<div class="card" style="width: 18rem">
    <img src="${dogList[i]}" class="card-img-top" alt="Dog Image" />
    <div class="card-body">
      <h5 class="card-title">Name</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
  </div> `;
    i++;
  });
  dogListELm.innerHTML = dogCard;
  document.getElementById("dogCount").innerText = dogList.length;
};
