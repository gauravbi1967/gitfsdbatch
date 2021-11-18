let name = 'gaurav';
let address = "bihar";
let str = '';
let str2 = "";

console.log(typeof name,typeof address,typeof str,typeof str2);

// Single quotes inside double quotes 
 let str3 = "It's Rainy"; 
 console.log(str3);

 // Double quotes inside single quotes
 let str4 = 'I am a "Web Developer"';
 console.log(str4);

 // String Literals 
let str5 = `My name is GGaurrav's Sharma's`;
console.log(str5);

let firstname = "GGaurrav" ;
let lastname = "sharma";
let fullname = firstname +" "+lastname ;
console.log('Full Name: ', fullname);

let fullname2 = 'Full name is ${fistname} ${lastname}';
console.log(fullname2);

// string Length
let firstNameLength = firstname.length;
console.log(firstNameLength); 

// Method for javascript

// 1) indexof()
let address2 = 'deori khurd,bilaspur,India,bilaspur 495004';
let bilaspurindex = address2.indexOf("bilaspur"); 

console.log(bilaspurindex);

// Note :- This is for First Occurence for First string 

// 2) lastIndexof
console.log(address2.lastIndexOf("bilaspur"));

// Search Method 
console.log(address2.search("bilaspur"));

// slice()

// syntax:
//=============================================================

   // slice(startPos, endPos)
    
   let slicedStr = address2.slice(-7,-3);
   console.log(slicedStr);

//  Note :- Slice is taking the positive and negative Index number 

//=======================================================

   // subString(start, end)

   let substringStr = address2.substring(7,3);
   console.log(substringStr);

 /* Note:- substring is having the two parameter same like starting position and ending 
           position */

// ======================================================
   // subStr(start, length)
    let substrString = address2.substr(13,4);
    console.log(substrString);   
   
    /* Note :- we can simply use the substr Method for slicing , or extracting the perticular 
          string  from the string */

// ===============================================================================================

 // ** concat() ** 

    console.log(firstname + lastname);
    console.log(firstname.concat(" ",lastname, "from bihar"));
    
 // ** trim()
       var str11 = "  hello world , how are you   ";
       console.log(str11.length);

       var trimmedStr = str11.trim();
       console.log(trimmedStr.length);
    /* trimming is nothing but the trimming the particular  white spaces for the 
       beginning and ending of a string itself */

 //  **  how can we extract the character from the method ??????
 
 // ** charAt(index)
       console.log(address2.charAt(10))

 // ** charCodeAt 
       console.log(address2.charCodeAt(3));
    
 // ** property Access 
       console.log(address2[3]);