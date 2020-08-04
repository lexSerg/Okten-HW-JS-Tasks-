function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const fCounter = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
  
      fCounter[letter] ? fCounter[letter] += 1 : fCounter[letter] = 1
      console.log(fCounter);
  
    }
  
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
  
      if (!fCounter[letter]) {
        return false
      } else {
        fCounter[letter] -= 1
      }
    }
  
    return true

  }
  
  
  console.log(validAnagram('damaa', 'amada'));
  