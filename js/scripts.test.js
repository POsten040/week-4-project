// Business Logic

function Pizza (size, T1, T2, T3, T4) {
  this.size = size;
  this.T1 = T1;
  this.T2 = T2;
  this.T3 = T3;
  this.T4 = T4;
}

Pizza.prototype.price = function() {
  let cost = 2 * (this.size * (this.T1 + this.T2 + this.T3 + this.T4));
  return (cost + " " + "bucks"); 
}



// UI Logic

function orderDetails(pizzaToDisplay) {
  let size = $("#size").val();
  let cheese = $("#cheese").val();
  let veggies = $("#veggies").val();
  let meats = $("#meats").val();
  let other = $("#other").val();
  if (size === 1) {
    pizzaToDisplay.size = "no size";
    }
  else if (size === 2) {
    pizzaToDisplay.size = "Eigth Inch";
    }
  else if (size === 3) {
    pizzaToDisplay.size = "Ten Inch";
    }
  else pizzaToDisplay.size = "Twelve Inch";
  if (cheese === 0) {
    pizzaToDisplay.T1 = "no cheese";
    }
  else if (cheese === 1) {
    pizzaToDisplay.T1 = "Feta";
    }
  else if (cheese === 2) {
    pizzaToDisplay.T1 = "Cheddar";
    }
  else pizzaToDisplay.T1 = "Kraft";
  if (meats === 0) {
    pizzaToDisplay.T2 = "no meats";
    }
  else if (meats === 1) {
    pizzaToDisplay.T2 = "Pepperoni";
    }
  else if (meats === 2) {
    pizzaToDisplay.T2 = "Ham";
    }
  else pizzaToDisplay.T2 = "Bacon";
  if (veggies === 0) {
    pizzaToDisplay.T3 = "no veggies";
    }
  else if (veggies === 1) {
    pizzaToDisplay.T3 = "Olives";
    }
  else if (veggies === 2) {
    pizzaToDisplay.T3 = "Onions";
    }
  else pizzaToDisplay.T3 = "Mushrooms";
  if (other === 0) {
    pizzaToDisplay.T4 = "no other";
    }
  else if (other === 1) {
    pizzaToDisplay.T4 = "Truffle Oil";
    }
  else if (other === 2) {
    pizzaToDisplay.T4 = "Mac n' Cheese";
    }
  else pizzaToDisplay.T4 = "Oreos";
  return pizzaToDisplay;
  } 

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza(parseInt($("#size").val()), parseInt($("#cheese").val()), parseInt($("#meats").val()), parseInt($("#veggies").val()), parseInt($("#other").val()));
    $("#result").html("<h2>" + pizza.price() + "</h2>");
    $("#orderDetails").html("<p>" + orderDetails(pizza) + "</p>");
  });
});