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

// UI LOGIC

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza(parseInt($("#size").val()), parseInt($("#cheese").val()), parseInt($("#meats").val()), parseInt($("#veggies").val()), parseInt($("#other").val()));
    $("#result").html("<h2>" + pizza.price() + "</h2>");
  });
  let pizza = new Pizza(parseInt($("#size").val()), parseInt($("#cheese").val()), parseInt($("#meats").val()), parseInt($("#veggies").val()), parseInt($("#other").val()));
  $("button#details").click(function(){
    ShowOrder(pizza);
  });
  $("button#start-over").click(function(){
    $("ul#orderDetails").text("");
    $("#result").text("");
  });
});