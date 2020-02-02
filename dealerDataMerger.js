const postButton = document.getElementById("postCarData");
const getButton = document.getElementById("getcardata");
let updateCarData = [];

const getCars = () => {
  axios({
    method: "get",
    url: "http://localhost:3100/api/dealerData"
  }).then(response => {
    postButton.disabled = false;
    sampleDisplay(response.data[0]);
    updateCarData = [...response.data];
  });
};

const postCars = () => {
  axios({
    method: "post",
    url: "http://localhost:3100/api/dealerData",
    data: {
      carData: updateCarData
    }
  });
};

getButton.addEventListener("click", getCars);
postButton.addEventListener("click", postCars);

const sampleDisplay = dataPoint => {
  let displayContainer = document.getElementById("sampleDisplay");
  let list = document.createElement("ul");
  for (let item in dataPoint) {
    let listElement = document.createElement("li");
    let node = document.createTextNode(`${item}: ${dataPoint[item]}`);
    listElement.appendChild(node);
    list.appendChild(listElement);
  }
  displayContainer.appendChild(list);
};
