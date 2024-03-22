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
    const aboutDog = generateRandomDescription();
    dogCard += `<div class="card flex-grow-1" style="width: 18rem">
    <img src="${dog}" class="card-img-top" alt="Dog Image"/>
    <div class="card-body">
      <h5 class="card-title">${breedName}</h5>
      <p class="card-text">
        ${aboutDog}
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

  const filtered = dogList.filter((dog) => {
    const dogName = extractBreedName(dog).toLowerCase();
    return dogName.includes(searchedName);
  });

  display(filtered);
});

const generateRandomDescription = () => {
  const description = [
    `<ul class="list-unstyled mt-3 mb-4">
    <li>5 Matches Per Day</li>
    <li>10 Messages Per Day</li>
    <li>Unlimited App Usage</li>
  </ul>
  <button type="button" class="w-100 btn btn-lg btn-outline-dark">
    Sign up for free
  </button> `,
    `<ul class="list-unstyled mt-3 mb-4">
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-dark">
                  Get started
                </button> `,
    ` <ul class="list-unstyled mt-3 mb-4">
                                <li>Pirority Listing</li>
                                <li>Unlimited Matches & Messages</li>
                                <li>Unlimited App Usage</li>
                              </ul>
                              <button type="button" class="w-100 btn btn-lg btn-dark">
                                Contact us
                              </button> `,
  ];

  const randomdes = Math.floor(Math.random() * description.length);
  return description[randomdes];
};
