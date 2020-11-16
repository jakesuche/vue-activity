// //Create a function that takes a string as its argument and returns 
// //the string in reversed order.

// function  reverse(str){
   
//     let splitString = str.split('');
//     let reverseString = splitString.reverse()
//     let joinArray = reverseString.join('')

//     console.log(joinArray)


// }


// reverse('Think different.')
// reverse("Your time is limited so don't waste it living someone else's life.")
// reverse("The only way to be truly satisfied is to do what you believe is great work..krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT")
// reverse("It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.")


//===================================================

// Write a function that takes an array of elements and returns only the integers.
//=================================

// function returnOnlyInteger(arr){
//     // let numbe = arr.filter(result => Number(result))
//     // console.log(numbe)
//     console.log(arr.filter(item =>Number.isInteger(item)))
// }
// returnOnlyInteger([9, 2, "space", "car", "lion", 16])
// returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])
// returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])



//===================================================

    //  write a function to print out small letters
//=================================

// function detectWord(str) {
// var i=0;
// var character='';
// let small = []

// while (i <= str.length){
//     character = str.charAt(i);
//     if (!isNaN(character * 1)){
       
//     }else{
        
//         if (character == character.toLowerCase()){
            
            
//             small.push(character)
//             // console.log(small)
//         }
//     }
//     i++;
    
// }
// console.log(small.join(''))
// }

// function detectWord(str) {
// 	return [...str].filter(s => s == s.toLowerCase()).join('')
// }


// detectWord("UcUNFYGaFYFYGtNUH")
//detectWord("bEEFGBuFBRrHgUHlNFYaYr")


