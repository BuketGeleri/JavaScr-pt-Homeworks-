
// #1

function checkPrime(...numbers){    
    for (let i = 0; i < numbers.length; i++) {
        let isPrime  = 1       
        for (let j = 2; j < numbers[i]; j++) {            
            if ((numbers[i]%j)==0){         
                isPrime = 0                
                break   
            }                       
        }
        if(isPrime==1)
        {
            console.log('Number ' + numbers[i] + ' is Prime')
        }
    }    
    
}

checkPrime(20,5,19,37,45,79)

// #2  for only 2 numbers

function checkfriendlyNumbers(...numbers){
    let totals  = [0,0]  
    for (let i = 0; i < numbers.length; i++) {        
        for (let j = 1; j < numbers[i]; j++) {           
            if ((numbers[i]%j)==0){                      
                totals[i] = j + totals[i]                
            }                       
        }           
    }       
    if(totals[0]==numbers[1] && totals[1]==numbers[0])
    {
        console.log(totals[0] + ' and ' + totals[1] + ' numbers are friendly numbers')
    }


}

checkfriendlyNumbers(220,284)
checkfriendlyNumbers(1184,1210)
checkfriendlyNumbers(996,864)  // this number pair is not friendly numbers


// #3

function findPerfectNumbers(n=1000){
    for (let i = 2; i <n; i++) {       
        let total = 0 
        for (let j = 1; j <=i; j++) {                 
            if ((i%j)==0){                          
                total = j + total          
            }                       
        }        
        if (total==(i*2)){
            console.log(i + ' is perfect number')
        }     
    } 
}

findPerfectNumbers()


// #4

function findPrimeNumbers(n=1000){
    for (let i = 2; i < n; i++) {
        let isPrime  = 1       
        for (let j = 2; j < i; j++) {            
            if ((i%j)==0){         
                isPrime = 0                
                break   
            }                       
        }
        if(isPrime==1)
        {
            console.log('Number ' + i +' is Prime')
        }
    }    
}

findPrimeNumbers()

