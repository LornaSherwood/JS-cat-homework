var app = function(){

  var createList = function(){
    var catList = document.createElement('ul'); 
    catList.classList.add('cat'); 
    return catList;
  };

  var createListItem = function(text){
    var listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
  };

  var createListImg = function(link){
    var image = document.createElement('IMG');
    image.width = 500;
    image.src = link;
    return image;
  };

  var appendElements = function(catList, listItem1, listItem2, image){
    catList.appendChild(listItem);
    catList.appendChild(listItem2);
    catList.appendChild(image);

    var cats = document.querySelector('#cats');
    cats.appendChild(catList);

    return cats;
  };

  var addCat = function(catName, catFood, catPic) { 
    var createList = createList();
    var createItem1 = createItem(catName);
    var createItem2 = createItem(catFood);
    var createImg = createImg(catWidth, catPic);

    appendElements(createList, catName, catFood, catPic); 
  };

  addCat('Name: Scruffy', 'Favourite Food: Scraps', 'cat.img');



}

//window.onload = app;


