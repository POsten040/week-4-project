// Business Logic

function Pizza (size, T1, T2, T3, T4) {
  this.size = size;
  this.T1 = T1;
  this.T2 = T2;
  this.T3 = T3;
  this.T4 = T4;
}

// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza($("#size").val(), $("#cheese").val(), $("#meats").val(), $("#veggies").val(), $("#other").val());
    console.log(pizza);
  })
})