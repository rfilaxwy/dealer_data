const postButton = document.getElementById("postCarData");
const getButton = document.getElementById("getcardata");
const updateCarData = [];

const getCarData = () => {
  console.log("clicked");
  axios({
    method: "get",
    url: "http://localhost:3100/api/dealerData",
    data: {
      date: new Date()
    }
  }).then(response => {
    postButton.disabled = false;
    updateCarData = [...response.data];
  });
};

const postCarData = () => {
  axios({
    method: "post",
    url: "http://localhost:3100/api/dealerData",
    data: {
      date: new Date(),
      carData: updateCarData
    }
  });
};

getButton.addEventListener("click", getCarData);
postButton.addEventListener("click", postCarData);

//Add a listener to get the data from the csv then change the button to send it to not disablled then send the data.
