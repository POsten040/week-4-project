function Pizza (size) {
  this.size = size;
  this.toppings;
}

Pizza.prototype.price = function() {
  let cost = 2 * (this.toppings.length + parseInt(this.size));
  return (cost + " " + "bucks"); 
}



// UI LOGIC

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza($("#size").val());
    pizza.toppings = ["<li>" + $("#cheese").val() + "</li>" + "<li>" + $("#meats").val() + "</li>" + "<li>" + $("#veggies").val() + "</li>" + "<li>" + $("#other").val() + "</li>"];
    $("#result").html("<h2>" + pizza.price() + "</h2>");
    $("#orderDetails").html("<li>" + pizza.size + "</li>" + pizza.toppings);
    });
  $("button#start-over").click(function(){
    $("ul#orderDetails").text("");
    $("#result").text("");
  });
});