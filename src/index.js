import $ from "jquery";
import "./css/styles.css";
import Person from "./js/person.js";

let newPerson;

function displayInfo(id) {
  let capitalize = id.substr(0, 1).toUpperCase() + id.substr(1);

  $("#planet-age").html(newPerson.getGalacticYears(newPerson.yearsEarth, id));

  if (newPerson.yearsLeft > 0) {
    $("#years-left").show();
    $(".planet").html(capitalize);
    $("#planet-years-left").html(newPerson.getGalacticYears(newPerson.yearsLeft, id));
  } else if (newPerson.yearsPassed > 0) {
    $("#years-passed").show();
    $(".planet").html(capitalize);
    $("#planet-years-passed").html(newPerson.getGalacticYears(newPerson.yearsPassed, id));
  }
}

function attachPizzaListeners() {
  $("#planets").on("click", "div", function () {
    $("#info-box").toggle();
    displayInfo(this.id);
  });
}

$(document).ready(function () {
  attachPizzaListeners();
  //Add checked class to checked items on click
  $("input").click(function () {
    $("input:not(:checked)").parent().removeClass("checked");
    $("input:checked").parent().addClass("checked");
  });

  //Make first input checked on default
  $("input").each(function () {
    if ($(this).val() === "rare" || $(this).val() === "less") {
      $(this).prop("checked", true);
      $(this).parent().addClass("checked");
    } else {
      $(this).prop("checked", false);
      $(this).parent().removeClass("checked");
    }
  });

  $("form#questions").submit(function (event) {
    event.preventDefault();
    //Get input
    let ageEarth = parseInt($("input#input-age").val());
    let junkFood = $("input[name='junk-food']:checked").val();
    let sport = $("input[name='sport']:checked").val();
    let sleep = $("input[name='sleep']:checked").val();
    let laugh = $("input[name='laugh']:checked").val();

    newPerson = new Person(ageEarth, junkFood, sport, sleep, laugh);
    console.log(newPerson);
    newPerson.getLifeExpectancy();
    newPerson.getYearsDifference();

    $("#planets-box").show();
    $("#questions-box").hide();
    $("#pointer").show();
  });

  $("#start").click(function () {
    $("#questions-box").toggle();
    $("#planets-box").hide();
    $("#info-box").hide();
    $("#years-passed").hide();
    $("#years-left").hide();
    $("#pointer").hide();

    $("input#input-age").val("");
    $("input").each(function () {
      if ($(this).val() === "rare" || $(this).val() === "less") {
        $(this).prop("checked", true);
        $(this).parent().addClass("checked");
      } else {
        $(this).prop("checked", false);
        $(this).parent().removeClass("checked");
      }
    });
  });
});
