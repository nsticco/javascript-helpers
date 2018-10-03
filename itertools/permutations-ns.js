// Similar implementation to Python's itertools.permutations

function permutations(array, r = 0) {                                                                      
  var n = array.length;                                                          
  if (r === 0) {                                                         
    r = n;                                                                     
  }                                                                              
  if (r > n) {                                                                   
    return;                                                                    
  }                                                                              
  var indices = [];                                                              
  for (var i = 0; i < n; i++) {                                                  
    indices.push(i);                                                           
  }                                                                              
  var cycles = [];                                                               
  for (var i = n; i > n - r; i-- ) {                                             
    cycles.push(i);                                                            
  }                                                                              
  var results = [];                                                              
  var res = [];                                                                  
  for (var k = 0; k < r; k++) {                                                  
    res.push(array[indices[k]]);                                               
  }                                                                              
  results.push(res);

  var broken = false;
  while (n > 0) {                                                                
    for (var i = r - 1; i >= 0; i--) {                                         
        cycles[i]--;                                                           
        if (cycles[i] === 0) {                                                 
            indices = indices.slice(0, i).concat(                              
                indices.slice(i+1).concat(
                    indices.slice(i, i+1)));             
            cycles[i] = n - i;                                                 
            broken = false;                                                    
        } else {                                                               
            var j = cycles[i];                                                 
            var x = indices[i];                                                
            indices[i] = indices[n - j];                          
            indices[n - j] = x;                                   
            var res = [];
            for (var k = 0; k < r; k++) {                        
                res.push(array[indices[k]]);                                   
            }                                                                  
            results.push(res);                                                 
            broken = true;                                                     
            break;                                                             
        }                                                                      
    }                                                                          
    if (broken === false) {                                                    
        break;                                                                 
    }                                                                          
  }                                                                              
  return results;  
}