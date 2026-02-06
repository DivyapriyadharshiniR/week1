//example 1:
let s="HELLO WORLD"
function lengthOfLastWord(s) {
    console.log(s.trim().split(" ").pop().length)
}
console.log(lengthOfLastWord(s))

// example 2:
let  a = " fly me to the moon "
function lengthOfLastWord(a) {
    console.log(a.trim().split(" ").pop().length)
}
console.log(lengthOfLastWord(a))

// example 3:

let b="silent"
let c="listen"
if(b.length==c.length){
    console.log("lenght are same")
}
else{
    console.log("not an anagram")
}
let len1=b.split('').sort().join('')
let len2=c.split('').sort().join('')
let srt1=len1
let srt2=len2
if(srt1===srt2){
    console.log(" IS AN ANAGRAM")
}
else{
    console.log("NOT AN ANAGRAM")
}
let d="hello"
let e="world"
if(d.length==e.length){
    console.log("lenght are same")
}
else{
    console.log("not an anagram")
}
let len3=d.split('').sort().join('')
let len4=e.split('').sort().join('')
let srt3=len3
let srt4=len4
if(srt3===srt4){
    console.log(" IS AN ANAGRAM")
}
else{
    console.log("NOT AN ANAGRAM")
}

