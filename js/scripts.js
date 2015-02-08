var titleCase = function(title) {
  var titleArray = title.toLowerCase().split(" ");
  
  
  upperCase(titleArray);

  exceptions(titleArray);
 
  return titleArray.join(" ");
};



var upperCase = function(title){
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    title[eachWord] = title[eachWord].charAt(0).toUpperCase() + title[eachWord].slice(1, title[eachWord].length);
  };
  return title;
};

var exceptions = function(title) {
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And", "In", "On", "Up"];
  title.forEach(function(word, index, newTitle) {
    if((index > 0) && (prepositions.indexOf(word) > -1)) {
      newTitle[index] = word.toLowerCase();
    }
  });
  return title;
};

$(document).ready(function() {
  $('form#title-case').submit(function(event) {
    var title = ($('input#word').val());
    var editedPhrase = titleCase(title);

    $('#result').text(editedPhrase);


    event.preventDefault();
  });
});



