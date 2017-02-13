var app = function(){

  var catsArray = [
  ["Name: Boba", "Favourite Food: Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg", 500],
  ["Name: Barnaby", "Favourite Food: Tuna", "https://pbs.twimg.com/media/C1hFLZaWEAYjIwb.jpg:large", 500],
  ["Name: Max", "Favourite Food: Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg", 500],
  ["Name: Scruffy", "Favourite Food: Scraps", "https://cdn.gogetfunding.com/wp-content/uploads/2013/08/28032/primary_image.jpg", 500],
  ["Name: Soft Kitty", "Favourite Food: Balls of fur", "http://r.ddmcdn.com/s_f/o_1/w_640/h_360/APL/uploads/2014/12/ragdoll-1-.jpg", 500]
  ];
  
  var createList = function(){
    var catList = document.createElement('ul'); 
    catList.classList.add('cat'); 
    return catList;
  };

  var createItem1 = function(nameText){
    var listItem = document.createElement('li');
    listItem.innerText = nameText;
    return listItem;
  };

  var createItem2 = function(foodText){
    var listItem2 = document.createElement('li');
    listItem2.innerText = foodText;
    return listItem2;
  };

  var createImage = function(imageText, imageWidth){
    var image = document.createElement('IMG');
    image.width = imageWidth;
    image.src = imageText;
    return image;
  };

  var appendElements = function(catList, listItem, listItem2, image){
    catList.appendChild(listItem);
    catList.appendChild(listItem2);
    catList.appendChild(image);

    var cats = document.querySelector('#cats');
    cats.appendChild(catList);
    return cats;
  };

  var addCat = function(nameText, foodText, imageText, imageWidth){
    var catList = createList();
    var listItem = createItem1(nameText);
    var listItem2 = createItem2(foodText);
    var image = createImage(imageText, imageWidth);

    appendElements(catList, listItem, listItem2, image);
  };

  var addMultipleCats = function(catsArray){
    for (cat of catsArray){
      addCat(cat[0], cat[1], cat[2], cat[3]);
    }
  };

  addMultipleCats(catsArray);


}

window.onload = app;