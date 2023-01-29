const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const Port = process.env.Port || 8000;

//create a path of partial
let staticpath = path.join(__dirname, "../Public");
let partialpath = path.join(__dirname, "../partials");
let viewpath = path.join(__dirname, "../views");
//to set a view engine
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));
const Gettime = (get) => {
  let date = new Date();
  let weekdays = new Array();
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  // console.log();
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Novem",
    "Dec",
  ];
  let mm = month[date.getMonth()];
  let wdays = weekdays[date.getDay()];
  let day = date.getDate();
  if (get === "month") {
    return mm + "  " + day;
  } else {
    return wdays;
  }
};
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  let c_month = Gettime("month");
  res.render("weather", {
    currentmonth: Gettime("month"),
    wdays: Gettime(),
  });

  // console.log(c_month);
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops! Page Not Found",
  });
});

app.listen(Port, (err) => {
  if (err) return console.log(err);
  console.log("Successfully Created");
});
