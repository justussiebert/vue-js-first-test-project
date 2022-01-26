//const dateAndTimeNow = new Date().toLocaleString("de-DE");
const dateAndTimeNow = new Date();
const dateFormatted =
  dateAndTimeNow.getDate() +
  "." +
  (dateAndTimeNow.getMonth() + 1) +
  "." +
  dateAndTimeNow.getFullYear() +
  ", " +
  dateAndTimeNow.getHours() +
  ":" +
  dateAndTimeNow.getMinutes() +
  ":" +
  dateAndTimeNow.getSeconds();

//console.log(dateAndTimeNow);
Vue.createApp({
  data() {
    return {
      nutzerName: "Siegfried",
      dateBorn: 500,
      //lastLogin: dateFormatted,
      lastLogin: new Date().toLocaleString("de-DE"),
    };
  },
}).mount("#sect1");
