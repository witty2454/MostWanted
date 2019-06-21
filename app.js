/*
Build all of your functions for displaying and gathering information below (GUI).
*/


// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    var foundPerson = searchByName(people);
    displayPerson(foundPerson[0]);
    break;
    case 'no':
        promptFor(" Would you like to search by weigth, heigth, or DOB?", yesNo).toLowerCase();
        let info = searchByTraits()
    // TODO: search by traits
    break;
    default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  personInfo += "Gender:" + person.gender + "\n";
  personInfo += "height:" + person.height + "\n";
  personInfo += "weight:"+ person.weight + "\n";
  personInfo += "DOB:"   + person.weight + "\n";
  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    
    else{
      return false;
    }
  });
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){  // "valid" is a callback!
  do{
    var response = prompt(question);
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function birthDate(params) {
  
}



function searchByTraits(){
  promptFor("what would you like to search by?")

  var foundPerson = people.filter(function(person){
    if(person.weigth === weight){
      return true;
    }
    if ( person.heigth === heigth){
    
    }
    else{
      return false;
    }
  });
  // TODO: find the person using the hiegth and weigth they entered
  return foundPerson;
}


