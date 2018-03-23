// JavaScript för att implementera kraven A-E.



let myFullProductList = $("#myFullProductList");

function getApiProducts() {
  $.get("http://demo.edument.se/api/products", (data) => {
      for (let product of data) {
          listProducts(product);
        //  console.log(product.Description);

        };
  });
}
function listProducts(product) {
  let productArticle = $("<article></article>");
  let productName = $("<h1></h1>");
  let productDescription = $("<p></p>");
  let lagerstatus = $("<p></p>");
  let productPrice = $("<footer></footer>");
  let productImage = $("<img>");
  let addItemToCartButton = $("<button></button>");

  productName.text(`${product.Name}`);
  productImage.attr("src", `${product.Image}`);
  productDescription.text(`${product.Description}`);
  lagerstatus.text("Lagerstatus");
  lagerstatus.attr("id", "lagerstatus");
  productPrice.text(`${product.Price} SEK`);
  addItemToCartButton.text("Add to");
  addItemToCartButton.attr("id", "add-to-cart");
  addItemToCartButton.click(() => {
      addToMyCart(product);
      addMyNewCart();
  });
  productArticle.append(productName, productImage, productDescription, lagerstatus, productPrice, addItemToCartButton);
  myFullProductList.append(productArticle);
}



/*
function listProducts(product) {/*
  $("#myFullProductList").append('<p>' + product.Name + '</p>');
  $("#myFullProductList").append('<p>' + product.Description + '</p>');
  $("#myFullProductList").append('<p>' + product.Price + '</p>');
  $("#myFullProductList").append('<img src="' + product.Image + '"></img>');
  $("#myFullProductList").append('<button>' + "Add to card" + '</button>');*/
  //console.log(product);

  /*
  $("#myFullProductList").append('<article>' +
  '<p>' + product.Name + '</p>' +
  '<p>' + product.Description + '</p>' +
  '<p>' + product.Price + '</p>' +
  '<img src="' + product.Image + '"></img>' +
  '<button>' + "Add to card" + '</button>' +
  '</article>');
}
*/

let myCart = JSON.parse(localStorage.getItem("myCart")) || [];

function addToMyCart(product) {
    myCart.push(product);
    localStorage.setItem("myCart", JSON.stringify(myCart));
}

function addMyNewCart() {
    let myItemsC = $("span");
    myItemsC.text(String(myCart.length));
}

// Math lagerstatusen
function lagerstatusMath() {
  $('#lagerstatus').text(Math.floor(Math.random() * 10) + 1);
}


function clearLocalS() {
  localStorage.clear();
  location.reload();
}



$(document).ready(function(){
    $("#hide").click(function(){
        $("section").hide();
    });
    $("#hide").click(function(){
        $("myChekout").show();
    });
});







//Starta functions...
getApiProducts();
lagerstatusMath();
addMyNewCart();
