/*
Build all of your functions for displaying and gathering information below (GUI).
*/


// app is the function called to start the entire application
function initSearch(people) {
  alert("Welcome to Family Tree");
  var searchType = prompt("Do you want to search by name or other criteria? Enter the word 'name' or 'other criteria'.");
  switch (searchType){
      case "name":
          var person = findPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
          displayPerson(person.firstName, person.lastName);
          mainMenu(person, people);
          break;
      case "other criteria":
          criteriaSearch();
          break;
      default:
          alert("There was an error.");
          initSearch(people);
  }
}


function mainMenu (person, people) {

  if(!person){
      alert("Sorry! We could not find that individual.");
      return initSearch(people);
  }

  var displayOption = prompt( "You found" + " '" + person.firstName + " " + person.lastName + "', " + "do you want to know his/her 'info', 'family', next of 'kin', or 'descendants'? Type the option you want, 'restart' to start over or 'quit' to exit.");

  switch(displayOption){

      case "info":
          displayInfo (person,people);

          break;

      case "family":
          getFamily(person, people);

          break;

      case "kin":

          break;

      case "descendants":

          break;

      case "restart":
          initSearch(people);
          break;

      case "quit":
          return;



      default:
          return mainMenu(person,people);
  }


}

function findPerson (firstName, lastName, people){
  var person = people.filter(function (el) {
      return el.firstName.toLowerCase().trim() === firstName.toLowerCase().trim() && el.lastName.toLowerCase().trim() === lastName.toLowerCase().trim();});

  if(!person.length > 0){
      alert("Sorry! We could not find that individual.");
      return initSearch(people);
  }
  return person[0];
}


function displayInfo (person,people){
   var personInfo = alert("Name:" + " " +person.firstName + " "+ person.lastName + "\n" + "Gender:" + " " + person.gender + "\n" + "Date of Birth:" + " " + person.dob + "\n" + "Height:" + " " + person.height + "\n" + "Weight:" + " " +  person.weight + "lbs\n" + "Eye Color:" + " " + person.eyeColor + "\n" + "Occupation:" + " " + person.occupation);

      mainMenu(person,people);
}

function getFamily (person, people){
          var spouse = getSpouse (person, people);

          var parentOne = getParentOne (person, people);

          var parentTwo = getParentTwo (person,people);



          var siblings = findSiblings(person, people);
            var siblingString="";
            if (siblings.length === 0){
              siblingsString === "None";
            }
            for (var i = 0; i < siblings.length; i ++){
              siblingString += siblings[i].firstName + " " + siblings[i].lastName + "\n";
            }

          var kids = getKids (person, people);
              var kidsString="";
              if (kids.length === 0){
                      kidsString = "None";
              }
              for (var i = 0; i < kids.length; i ++){
                  kidsString += kids[i].firstName + " " + kids[i].lastName + "\n";

         }



          alert("Spouse: \n" + " " + spouse + " " + "\n\n" + "Parent(s): \n" + parentOne +  "\n" + parentTwo + "\n\n"     + "Sibling(s): \n" + siblingString + "\n\n" + "Children: \n" + kidsString + "\n");

  mainMenu (person, people) ;

}

function getSpouse (person,people){
  if (!person.currentSpouse){
  return "None";
  }
  else{
      var spouse = getPersonById(person.currentSpouse ,people);
  }
  return spouse.firstName + " " + spouse.lastName;
}


function getParentOne (person, people){
  if (person.parents.length === 0){
  return "None";
  }
  else{
      var parentOne = getPersonById(person.parents[0], people);
   }
  return parentOne.firstName + " " + parentOne.lastName;
}


function getParentTwo (person, people){
  if (person.parents.length === 0 || person.parents.length === 1){
      return "";
  }
  else {
      var parentTwo = getPersonById(person.parents[1], people);

  }
   return parentTwo.firstName + " " + parentTwo.lastName ;
}


function getPersonById (id ,people) {
  if(id > 0){
  var personFamily = people.filter(function (person) {
      return person.id === id;});
}else{
return false
}
  return personFamily[0];
}


function findSiblings(myPerson, people){
  var parentIDs = myPerson.parents;
  var siblings = people.filter(function(person){
      if (myPerson.parents === [0] && parentIDs[0] === person.parents[0]){
        return false;
      }
      else if(parentIDs[0] === person.parents[0]){
          return true;
      }
  });
  return siblings;
}


function getKids (parent,people){
  var kids= people.filter(function(person){

  for (var i = 0; i < person.parents.length; i ++){
      if (person.parents[i] === parent.id) {
          return true;
      }
      else {
          return false;
      }


  }});

  return kids;
}


function displayPerson (firstName, lastName){
  alert("Person:" + " " + firstName + " " + lastName);
}


function criteriaSearch(){

  alert("Please answer the following questions, if you do not know the answer please leave blank");


  var personheight = prompt("What is the person's height in inches? Ex. 71");
  var personWeight = prompt("How much does the person weigh? Please only put in the number format in lbs. Example: 175");
  var personAge = prompt("How old is the person you are looking for?");
  var personOccupation = prompt("What is the persons occupation? Please only put in one word. Example: doctor");
  var personEyeColor = prompt("What is the persons eye color? Please only put in one word. Example: green");
  var persongender = prompt("What gender is the person that you are looking for, 'male' or 'female'?");

  mainMenu(selectedPerson, people);

  searchByCriteria ();
}



function searchByCriteria(height, weight, age, job, eyeColor, sex){
  return people.filter(function(person){

      if(height && person.height !=height){
          return false;
      }
      if(weight && person.weight != weight){
          return false;
      }

      if (age && person.dob != age){
          return false;
      }
      if (job && person.occupation != job){
          return false;
      }
      if (eyes && person.eyeColor != eyes){
          return false;
      }
      if (sex && person.gender != sex){
          return false;
      }
      return true;
  });}