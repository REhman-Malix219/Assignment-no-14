// function porgram1()
// {
// // 1.  Write a js program to find maximum between two numbers.
//     var n1=parseInt (prompt ("enter your number"));
//  var n2=parseInt(prompt("enter your number "));
//  if(n1>=n2){
//     console.log("ni  is maximum");
// }
// else
// {
//     console.log("n2 is maximum");
// }
// }

// function program2()
// {
//     // 2. Write a js program to find maximum between three numbers.

// var n1=parseInt (prompt ("enter your 1st number"));
//  var n2=parseInt(prompt("enter your 2nd number "));
//  var n3=parseInt(prompt("enter your 3rd numbert"));
//  if(n1>n2&&n1>n3)
//  {
//     console.log("n1 is maximum");
//  }
//  else if(n2>n1&&n2>n3)
//  {
//     console.log("n2 maximum");
//  }
//  else if(n3>n1&&n3>n2)
//     {
//        console.log("n3 maximum");
//     }
//     else
//     {
//         console.log("invakid");
//     }


// }


// function program3()
// {
//     // 3. Write a js program to check whether a number is negative, positive or zero.

// var n1=parseInt (prompt ("enter your number"));
// if(n1>0)
//      {
//         console.log("postive");
//      }
//      else if(n1<0)
//      {
//         console.log("nagtive");
//      }
//      else
//         {
//            console.log("zero");
//         }

// }


// function program4()
// {
//     // / 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// var n1=parseInt (prompt ("enter your number"));
// if(n1%5==0)
//      {
//         console.log("divisibl by 5");
//      }
//      else if(n1%11==0)
//      {
//         console.log("diviibl by 11");
//      }
// }



// function program5()
// {
//     // 5. Write a js program to check whether a number is even or odd.
// var n1=parseInt (prompt ("enter your number"));
// if(n1%2==0)
//      {
//         console.log("even");
//      }
//      else
//      {
//         console.log("odd");
//      }   
// }


// function program6()
// {
//    // 6. Write a js program to check whether a year is leap year or not.
// var n1=parseInt (prompt ("enter your year"));
// if(n1%4==0)
//      {
//         console.log("leap year");
//      }
//      else
//      {
//         console.log("not leap year");
//      }    
// }


// function program7()
// {
//     // 7. Write a js program to check whether a character is alphabet or not.
// var char=prompt ("enter your character ");
// if((char>='a'&& char<='z')||(char>='A'&& char<='Z'))
//      {
//         console.log("alphabet");
//      }
//      else
//      {
//         console.log("digit or ymbol");
//      }
// }


// function program8()
// {
//     // 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// var char = prompt("enter your character ")
// switch(char)
// {
//     case 'a':
//     case 'A':
//         console.log("vowal")
//     break;
//     case 'e':
//     case 'E':
//         console.log("vowal")
//         break;
//     case 'i':
//     case 'I':
//         console.log("vowal")
// break;
//     case 'o':
//     case 'O':
//         console.log("vowal")
// break;
//     case 'u':
//     case 'U':
//         console.log("vowal")
// default:
//     console.log("consonant")
    

// }
    
// }


// function program9()
// {
//     // 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// var char = prompt("enter your charachter")
// if((char>='a'&& char<='z')||(char>='A'&& char<='Z'))
// {
//     console.log("you enter character")
// }
// else if((char>='0' && char<='9'))
// {
//     console.log("you enter digits")
// }
// else
// {
//     console.log("youe enter symbol")
// }
// }



// function program10()
// {
//     // 10. Write a js program to check whether a character is uppercase or lowercase alphabet




// var character = prompt("enter your character")
// if(character>='a' && character<'z')
// {
//     console.log("you enter lower case alphabat")

// }
// else if(character>='A' && character<='Z')
// {
//     console.log("you enter upper case latter")
// }
// }


// function program11()
// {
//     // 11. Write a js program to input week number and print week day.
// var n=parseInt(prompt("enter week day in num"));
// switch(n)
// {
//     case 1:
//         console.log("mon");
//         break;
//     case 2:
//         console.log("un");
//         break;
//     case 3:
//         console.log("tue");
//         break;
//     case 4:
//         console.log("wed");
//         break;
//     case 5:
//         console.log("thu");
//         break;
//     case 6:
//         console.log("fri");
//         break;
//     case 7:
//         console.log("sat");
//         break;
//     default:
//         console.log("invalid");

// }
// }



// function program12()
// {
//     // 12. Write a js program to input month number and print number of days in that month.
// var n=parseInt(prompt("enter week month in num"));
// switch(n)
// {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("apr");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//             console.log("aug");
//         break; 
//     case 9:
//             console.log("sep");
//         break; 
//     case 10:
//             console.log("oct");
//         break; 
//     case 11:
//             console.log("nov");
//         break; 
//     case 12:
//             console.log("dec");
//         break;
//     default:
//         console.log("invalid");

// }
// }


// function program14()
// {
//    // 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
// var n1=parseFloat(prompt ("enter your 1st angle"));
//  var n2=parseFloat(prompt("enter your 2nd angle "));
//  var n3=parseFloat(prompt("enter your 3rd angle"));
//  if(n1>0 && n2 >0 && n3 >0 && (n1 + n2 + n3 ==180)){
//     console.log("perfact triangle");
//  }
//  else
//  {
//     console.log("not perfact triangle");
//  } 
// }



// function program15()
// {
//     // 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// // Program to check if a triangle is valid based on its sides

// var side1 = parseFloat(prompt("Enter the first side of the triangle:"));
// var side2 = parseFloat(prompt("Enter the second side of the triangle:"));
// var side3 = parseFloat(prompt("Enter the third side of the triangle:"));

// // Check if the triangle is valid using the triangle inequality theorem
// if (
//     side1 > 0 && side2 > 0 && side3 > 0 && // All sides must be positive
//     (side1 + side2 > side3) &&
//     (side1 + side3 > side2) &&
//     (side2 + side3 > side1)
// ) {
//     console.log("The triangle is valid.");
// } else {
//     console.log("The triangle is not valid.");
// }
// }


// function program16()
// {
//      // 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
//     // Program to check the type of triangle based on its sides

// // Input sides of the triangle from the user
// var side1 = parseFloat(prompt("Enter the first side of the triangle:"));
// var side2 = parseFloat(prompt("Enter the second side of the triangle:"));
// var side3 = parseFloat(prompt("Enter the third side of the triangle:"));

// // Check if the sides form a valid triangle
// if (
//     side1 > 0 && side2 > 0 && side3 > 0 && // All sides must be positive
//     (side1 + side2 > side3) &&
//     (side1 + side3 > side2) &&
//     (side2 + side3 > side1)
// ) {
//     // Check the type of triangle
//     if (side1 === side2 && side2 === side3) {
//         console.log("The triangle is an Equilateral triangle.");
//     } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//         console.log("The triangle is an Isosceles triangle.");
//     } else {
//         console.log("The triangle is a Scalene triangle.");
//     }
// } else {
//     console.log("The given sides do not form a valid triangle.");
// }
// }



// function program20()
// {
//     // 20  Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// // Percentage >= 90% : Grade A
// // Percentage >= 80% : Grade B
// // Percentage >= 70% : Grade C
// // Percentage >= 60% : Grade D
// // Percentage >= 40% : Grade E
// // Percentage < 40% : Grade F


// var sum=0;
// for(var i=1; i<=5;i++)
// {
//    var marks= prompt("enter your marks of subject",i)
//    sum=marks+sum;
// }
// console.log(sum)
// }





                   


// program20();
// program16();
// program15();
// program14();
// program12();
// program11();
// program10();
// program9();
// program8();
// program7();
// program6();
// program5();
// program4();
// program3();
// program2();
// program1();


