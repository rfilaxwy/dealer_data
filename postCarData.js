const axios = require("axios");

const sendCarData = () => {
  axios({
    method: "post",
    url: "/dealerData",
    data: {
      date: new Date()
    }
  });
};
document.getElementBydId("dealerButton").addEventListener("click", sendCarData);
