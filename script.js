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

const link1 = document.querySelector("#linkNormalJs");
//console.log("XX: ", link1);
link1.addEventListener("click", function (e) {
  //console.log("cccc");
  e.preventDefault();
});

//console.log(dateAndTimeNow);

Vue.createApp({
  data() {
    return {
      nutzerName: "Siegfried",
      dateBorn: 500,
      //lastLogin: dateFormatted,
      lastLogin: new Date().toLocaleString("de-DE"),
      teamA: [
        {
          nameOfTeamMember: "Tarzan",
          ageOfTeamMember: 25,
        },
        {
          nameOfTeamMember: "Jane",
          ageOfTeamMember: 29,
        },
        {
          nameOfTeamMember: "Cheetah",
          ageOfTeamMember: 12,
        },
      ],
      someHtmlStuff: '<h2 class="someClass">Some Text for headline</h2>',
    };
  },

  directives: {
    meinglanzlicht: {
      mounted(el) {
        el.style.backgroundColor = "salmon";
      },
    },
  },
}).mount("#sect1");
