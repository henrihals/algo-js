/* Write a program that takes an array of words and smashes them together into a sentence and returns 
the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces 
between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example:

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */


let array = ['Hello', 'world', 'this', 'is', 'great'];

array[array.length - 1];

var phrase = array.join(" ");

console.log(phrase);

// pq le -1 de array.length