/*

Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true. Don’t consider “y” as a vowel.
hasMoreVowels('moose')


If it’s half vowels (or less), it’s false:
hasMoreVowels('mice')
hasMoreVowels('graph')

*/


const hasMoreVowels = word => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let vowelsNeeded = word.length / 2
    let wordSplit = word.toLowerCase().split('')
    // Alternatively, we can just include the capital letters of the vowels in the array and omit the .toLowerCase() method
  
    for (let i = 0; i < wordSplit.length; i++) {
      let letter = wordSplit[i]
  
      if (vowels.includes(letter)) {
        vowelCount++
      }
  
      if (vowelCount > vowelsNeeded) {
        return true
      }
    }
  
    return false
  }


console.log(hasMoreVowels("moose"));
