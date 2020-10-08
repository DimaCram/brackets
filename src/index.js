module.exports = function check(str, bracketsConfig) {

  let pairBrackets = [];
  str = str.split("");

  bracketsConfig.forEach(element => {
    pairBrackets.push(element[0] + element[1]);
  });

  if(str.length % 2 !== 0) return false;

  for(let i = 0; i < str.length; i++){

    if(pairBrackets.indexOf(str[i] + str[i+1]) > -1){
      str.splice(i, 2);
      i = -1;
    }
  }
  return str.length === 0;
}
