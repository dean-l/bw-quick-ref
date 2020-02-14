$( document ).ready(function() {
  console.log( "ready!" );
  $.getJSON("data/skills.json", function(skills) {
    console.log(skills);
    Tempo.prepare("skillsList").render(skills);
  });
  $.getJSON("data/traits.json", function(traits) {
    console.log(traits);
    Tempo.prepare("traitsList").render(traits);
  });
});

function sectionSelect(id) {
  var checkBox = document.getElementById(id);
  var text = document.getElementById(id+"Display");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function search(name) {
    // Declare variables
    var input, filter, tbody, li, a, i, txtValue;
    input = document.getElementById(name+"Search");
    filter = input.value.toUpperCase();
    tbody = document.getElementById(name+"List");
    tr = tbody.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      a = tr[i].getElementsByTagName("td")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }