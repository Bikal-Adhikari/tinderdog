let dogList = [];
const api = "https://dog.ceo/api/breeds/image/random/50";
const dogListElm = document.getElementById("list");
const breedSelectElm = document.getElementById("breeds-1");

const fetchDogs = async (url = api) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dogList = data.message;

    display(dogList);
    populateBreedSelect(dogList);
  } catch (error) {
    console.log(error);
  }
};

fetchDogs();

const display = (dogList) => {
  let dogCard = "";
  let i = 0;
  dogList.forEach((dog) => {
    const breedName = extractBreedName(dog);
    dogCard += `<div class="card" style="width: 18rem">
    <img src="${dog}" class="card-img-top" alt="Dog Image" />
    <div class="card-body">
      <h5 class="card-title">${breedName}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
  </div> `;
    i++;
  });

  dogListElm.innerHTML = dogCard;
  document.getElementById("dogCount").innerText = dogList.length;
};

const extractBreedName = (url) => {
  const name = url.split("/");
  return name[name.indexOf("breeds") + 1];
};

const populateBreedSelect = (dogList) => {
  const uniqueBreeds = [
    ...new Set(dogList.map((dog) => extractBreedName(dog))),
  ];
  breedSelectElm.innerHTML = `<option value="">Show All</option>`;
  uniqueBreeds.forEach((breed) => {
    breedSelectElm.innerHTML += `<option value="${breed}">${breed}</option>`;
  });
};

const handleOnBreedSelect = () => {
  const selectedBreed = breedSelectElm.value;
  const filteredDogs = selectedBreed
    ? dogList.filter((dog) => extractBreedName(dog) === selectedBreed)
    : dogList;
  display(filteredDogs);
};

document.getElementById("search").addEventListener("keyup", (e) => {
  const searchedName = e.target.value.toLowerCase();

  const filter = dogList.filter((dog) => {
    const DogName = extractBreedName(dog).toLowerCase();
  });
});
