
//PARSE - paring knife, parcel
// substring (start, end) //NO SUPPORT FOR NEGATIVE
//subtr(start, length) // USES LENGTH WHICH IS WEIRD
// slice(start, end //ALL PURPOSE BUT ONLY MAKES ONE OUT
// split("") if you use split its even better MULTIPLE CUTS W NO NUMBERS
//ORPORTLAND - slice me as I have no delimiter e.g " " or "."

//body of text is a corpus
let corpus = "Now is the time..." //array/list of characters
console.log("LENGTH", corpus.length)

// i=0
// console.log(corpus[i++])
//i is for index
//i++ is shorthand for i = i + 1
//for(intitalize/start;boolean expression when to stop; change/increment){ code to repeat }

for(let i=0; i < corpus.length; i++){
    console.log(i, corpus[1], corpus[i].charCodeAt(0)) //REPEAT
}
console.log("DONE")

//for(i=0; i < corpus.length; i++){
//    console.log("INDEX:"+i, "LETTER"+corpus[1], "CODE:"+corpus[i].charCodeAt(0)) //REPEAT
//}
words = corpus.split("")
console.log(words)
console.log("LENGTH (word count):", words.length)
console.log("FIRST WORD" , words[0])//first word
console.log("LAST WORD" , words[words.length - 1])//last word

for(let i=0; i < corpus.length; i++){
    console.log(i, corpus[1], corpus[i].charCodeAt(0)) //REPEAT
}

ip = "127.128.128.255"
parts = ip.split(".")
console.log(parts)
console.log(parts[3])