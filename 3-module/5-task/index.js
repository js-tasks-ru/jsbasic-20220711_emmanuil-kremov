function getMinMax(str) {
  let obj = {}; 
  let arr = str.split(' ').filter(elem => +elem);
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr); 
  return obj; 
}
