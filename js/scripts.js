$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input#number").val());
    pingpong(numbers);
    numbersToBePingponged.forEach(function(numbers){
      $("#result").append("<li>" + numbers + "</li>");
      });
    });
  });

var numbersToBePingponged = [];

function pingpong(numbers) {

      for (var index = 1; index <= number; index++) {
          if (index % 15 === 0) {
              numbersToBePingponged.push("pingpong")
          } else if (index % 5 === 0) {
              numbersToBePingponged.push("pong")
          } else if (index % 3 === 0) {
              numbersToBePingponged.push("ping")
          } else {
              numbersToBePingponged.push(index);
          }
      }
      return numbersToBePingponged;
    }
