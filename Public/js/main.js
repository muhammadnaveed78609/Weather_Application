let submitbtn = document.getElementById("submitBtn");
let cityname = document.getElementById("cityName");
let output = document.getElementById("city_name");
let temp = document.getElementById("temp");
let temp_status = document.getElementById("temp_status");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityname.value;
  if (cityVal == "") {
    output.innerText = "Write Something before Search";
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=10690d24d1f0de13be1fef4a9a0f9c14`;
      let data = await fetch(url);
      let response = await data.json();
      let objdata = [response];
      console.log(objdata);
      output.innerText = objdata[0].name;
      console.log(objdata[0].name);
      temp.innerText = objdata[0].main.temp;
      console.log(objdata[0].main.temp);
      //condition to check type of weather
      let temp_mood = objdata[0].weather[0].main;
      if (temp_mood === "Clear") {
        temp_status.innerHTML =
          "<i class='fa fa-sun' style='color: #eccc68;'></i>";
      } else if (temp_mood === "Clouds" && temp_mood === "Smoke") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (temp_mood === "Rain") {
        temp_status.innerHTML =
          "<i class='fa fa-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
      }
      // temp_status.innerText = `${objdata[0].weather[0].main}`;
      // console.log(objdata[0].weather[0].main);
    } catch (error) {
      temp_status.innerText = "";
      temp.innerText = "";
      output.innerText = "You enter Invalid City";
    }
  }
};
submitbtn.addEventListener("click", getInfo);
