import $ from "jquery";
import "./css/styles.css";
import Person from "./js/person.js";

let newPerson;
function displayYearsLeft(years) {
  $(".years-left").show();
  $("#mercury-years-left").html(newPerson.getMercuryYears(years));
  $("#mars-years-left").html(newPerson.getMarsYears(years));
  $("#jupiter-years-left").html(newPerson.getJupiterYears(years));
  $("#venus-years-left").html(newPerson.getVenusYears(years));
}

function displayYearsPassed(years) {
  $(".years-passed").show();
  $("#mercury-years-passed").html(newPerson.getMercuryYears(years));
  $("#mars-years-passed").html(newPerson.getMarsYears(years));
  $("#jupiter-years-passed").html(newPerson.getJupiterYears(years));
  $("#venus-years-passed").html(newPerson.getVenusYears(years));
}

$(document).ready(function () {
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
    let junkFood = $("input[name='junk-food']").val();
    let sport = $("input[name='sport']").val();
    let sleep = $("input[name='sleep']").val();
    let laugh = $("input[name='laugh']").val();

    //Reset default input
    $("input#age-input").val("");
    $("input").each(function () {
      if ($(this).val() === "rare" || $(this).val() === "less") {
        $(this).prop("checked", true);
        $(this).parent().addClass("checked");
      } else {
        $(this).prop("checked", false);
        $(this).parent().removeClass("checked");
      }
    });

    newPerson = new Person(ageEarth, junkFood, sport, sleep, laugh);
    newPerson.getLifeExpectancy();
    newPerson.getYearsDifference();

    $("#planets").show();
    $("#mercury-age").html(newPerson.getMercuryYears(ageEarth));
    $("#mars-age").html(newPerson.getMarsYears(ageEarth));
    $("#venus-age").html(newPerson.getVenusYears(ageEarth));
    $("#jupiter-age").html(newPerson.getJupiterYears(ageEarth));

    if (newPerson.yearsLeft > 0) {
      displayYearsLeft(newPerson.yearsLeft);
    } else if (newPerson.yearsPassed > 0) {
      displayYearsPassed(newPerson.yearsPassed);
    }
  });
});
