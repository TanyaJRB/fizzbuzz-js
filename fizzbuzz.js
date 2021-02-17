
// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    for (let i = 1; i < 301; i++)
    {
        let three = i%3 === 0;
        let five = i%5 === 0;
        let seven = i%7 === 0; 
        let eleven = i%11 === 0;
        let thirteen = i%13 ===0;
        let seventeen = i%17 ===0;
        
        let wordArray = []; //string array
        let finalPhrase = "";

        if (three || five || seven || eleven || thirteen || seventeen)
        {
            if (three){
                wordArray.push('Fizz');}
    
            if (five){
                wordArray.push('Buzz');}
    
            if (seven){
                wordArray.push('Bang');}
    
            if (eleven){
                wordArray = ['Bong'];}
    
            if (thirteen){
                if (wordArray.includes('Buzz') || wordArray.includes('Bang') || wordArray.includes('Bong')){
                    let indexesBs = [wordArray.indexOf('Buzz'), wordArray.indexOf('Bang'), wordArray.indexOf('Bong')].sort();
                    indexesBs = indexesBs.filter(function(x){ return x > -1 });
                    wordArray.splice(indexesBs[0], 0, 'Fezz');
                }
                else { wordArray.push('Fezz');}
            }
    
            if (seventeen){
                if (wordArray.length < 1){
                    wordArray = [i];}
                else{
                    wordArray.reverse();}
            }
    
            finalPhrase = wordArray.join('');
        }

        else{
            finalPhrase = i;
        }

        console.log(i + " is " + finalPhrase);
    }

}

//THIRTEEN

// for (i=0; i < wordArray.length; i++)
                // {
                //     if (wordArray[i] === 'Bang' || wordArray[i] === 'Bong' || wordArray[i] === 'Buzz')
                //     {
                //         wordArray.splice(i, 0, 'Fezzoooooooooo');
                //         break;
                //     }
                //     else 
                //     {
                //         wordArray.push('Fezz');
                //         break;
                //     }
                // }
                // break;



// ORIGINAL ATTEMPT 
//     for (let i = 1; i < 101; i++)
//     {
//         let three = i%3 === 0;
//         let four = i%4 === 0; 
//         let five = i%5 === 0;
//         let seven = i%7 === 0; 
//         let eleven = i&11 === 0;
//         let thirteen = i%13 ===0;
//         let seventeen = i%17 ===0;

//         if (seven && three && five)
//         {
//             console.log('FizzBuzzBang');
//         }
//         else if (three && five && !eleven)
//         {
//             console.log('FizzBuzz');
//         }
//         else if (three && seven && !eleven)
//         {
//             console.log('FizzBang');
//         }
//         else if (three && !eleven)
//         {
//             console.log('Fizz');
//         }
//         else if (seven && five  && !eleven)
//         {
//             console.log('BuzzBang');
//         }
//         else if (five && !eleven)
//         {
//             console.log('Buzz');
//         }
//         else if (seven && !eleven)
//         {
//             console.log('Bang');
//         }
//         else if (eleven)
//         {
//             console.log('Bong');
//         }
//         else if (thirteen)
//         {
//             console.log('Fezz');
//         }
//         else
//         {
//             console.log(i);
//         }
//     }

    

// Now we run the main function...
fizzbuzz();
