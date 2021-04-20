// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
  
    const arrToReturn = []
    
    for(const age_handicap of data) {
      if(age_handicap[0] >= 55 && age_handicap[1] > 7) {
        arrToReturn.push('Senior')
      } else {
        arrToReturn.push('Open')
      }
    }
    return arrToReturn
}