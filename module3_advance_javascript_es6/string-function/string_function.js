/*
String functuions in JavaScript ES6
String functions in javascrript is a inbuild function that is used to manipulate strings.
It provides various methods to perform operations like searching, replacing, and extracting substrings.
some of the commonly used string functions in JavaScript ES6 are:
- `charAt()`: Returns the character at a specified index in a string.
- `concat()`: Joins two or more strings and returns a new string.
- `includes()`: Checks if a string contains a specified substring.
- `indexOf()`: Returns the index of the first occurrence of a specified substring in a string.
- `lastIndexOf()`: Returns the index of the last occurrence of a specified substring in a string.
- `match()`: Searches a string for a match against a regular expression and returns the matches.
- `replace()`: Replaces a specified substring with another substring in a string.
- `search()`: Searches a string for a match against a regular expression and returns the index of the match.
- `slice()`: Extracts a section of a string and returns it as a new string.
- `split()`: Splits a string into an array of substrings based on a specified delimiter.
- `substring()`: Extracts characters from a string between two specified indices.
- `toLowerCase()`: Converts a string to lowercase.
- `toUpperCase()`: Converts a string to uppercase.
// - `trim()`: Removes whitespace from both ends of a string.

*/

// Example of string functions in JavaScript ES6

function stringFunctionsExample() {
    let str = "Hello charan";

   //convert to uppercase
   let upperstr = str.toUpperCase();
   console.log(upperstr);

   // convert to lowercase
   let lowerstr = str.toLowerCase();
   console.log(lowerstr);

   // charAt() - Returns the character at a specified index in a string
   let charAtIndex = str.charAt(0);
   console.log(`${charAtIndex}`);

   // concat() - Joins two or more strings and returns a new string
   let str2 = "Welcome to javascript";
   let charan = str.concat(" ", str2);
   console.log(charan);

   //includes() - Checks if a string contains a specified substring
   let includesstr = str.includes("charan");
   console.log(`Does the string include 'charan'? ${includesstr}`);

   //indexOf() - Returns the index of the first occurrence of a specified substring in a string
     let indexOfstr = str.indexOf("charan");
     console.log(`Index of 'charan' in the string: ${indexOfstr}`);

     // lastIndexOf() - Returns the index of the last occurrence of a specified substring in a string
     let lastIndexOfstr = str.lastIndexOf("charan");
        console.log(`Last index of 'charan' in the string: ${lastIndexOfstr}`);

        //check if a string is a valid number
      let isValidNumber = !isNaN(Number(str));
      console.log(`Is the string a valid number? ${isValidNumber}`);
}
stringFunctionsExample();