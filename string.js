let data="MADAM"
let rev=""
for(let i=data.length - 1; i >=0; i--)
{
    rev=rev+data[i]
}
console.log(rev)

// palindrome

function palindrome(org,rev1) {
       if(org === rev1){
        console.log("IT IS PALINDROME")
    }
    else{
        console.log("NOT A PALINDROME")
    }
}
palindrome(data,rev)