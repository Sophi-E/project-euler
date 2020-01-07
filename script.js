function multiplesOf3and5(number) {
    let counter = []
      for(let i = 0; i < number; i++){
          if(i % 3 === 0 || i % 5 === 0){
              counter.push(i)
      } 
    } 
          return counter.reduce((a, b) => a + b, 0) 
    
  }
  
  multiplesOf3and5(1000);
  