var button = $('.submit-btn');
var container = $('.container');
var remove = $('.remove');
//This is ADDED into our HTML and it allows us to delete what we added
var removeButton = $('.remBtn'); 

//This is our event listener 
button.on("click", addItem); 

function addItem(){
  var length = $('.length').val();
  var width = $('.width').val();
  var height = $('.height').val();

  var sum = ((2*length*width)+(2*width*height) + (2*length*height));
 container.append(`<p>The surface area is ${sum}! </p>`)
  
}

container.on("on click", ".remove", deleteItem)

function deleteItem(event){
  event.target.parentNode.remove();
}