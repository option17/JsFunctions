let userNames = [`JOSH`, `JAMES`, `MARC`, `LUCAS`, `winnerspree`]


let counter = 0

while(counter < userNames.length){
    
      let lowerUserName = userNames[counter].toLowerCase()
      console.log(lowerUserName )
      let doesInclude = userNames[counter].includes(`winner`)
    if(doesInclude === true){
        console.log(`We have a winner: ${userNames[counter]}`);
    }
    counter++

    
}


 
