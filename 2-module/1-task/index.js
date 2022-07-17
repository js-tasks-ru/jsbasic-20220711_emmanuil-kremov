function sumSalary(salaries) {
  let sum = 0; 

  for (let salary in salaries){

    if(!isNaN(salaries[salary]) && salaries[salary] != Infinity && salaries[salary] != -Infinity){
      sum += salaries[salary];
    }
  }
  
  return sum;
}
