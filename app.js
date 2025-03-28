console.log('Pig, Horse, Dog')
  
//Quick Question 1
//What does this code return?
new Set([1,1,2,2,3,4])

//my answer
//Originally forgot the curly braces and used [] instead
{1, 2, 3, 4}

//Quick Question 2
//What does the following code return?
[...new Set("referee")].join("")

//my answer:
//I was a little confused with it being an array or not
'ref'

//Quick Question 3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//answer:
//I didn't understand at first that both array are different addresses in memory
0: {Array(3) => true}
1: {Array(3) => false}




//hasDupllicate
//I was happy I got a big chunk of this but had some syntax issues to correct
const hasDupllicate = (arr) => new Set(arr).size !== arr.length
//I did look up all the details of this line of code to understand it more




//vowelCounter

//answer:

function vowelCount(str){
    const vowelMap = new Map();
    //Want to iterate over every single char
    for(let char of str){
        //pretty common to lower case everything
      let lowerCaseChar = char.toLowerCase()
      //checking if it is a vowel
      if(isVowel(lowerCaseChar)){
        //Checking if the new map has or 'includes' the letter/char
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
            //If it is not found, we start a new key,value pair with the char
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    //This is placed at the very end.
    return vowelMap;
  }
