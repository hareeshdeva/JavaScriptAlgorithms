//For a = [100,200,50,40,10], the output should be  alternatingSum(a) =[]

function alternatingSum(a : number[]): number[]{
    //Initializing to 0
    let evenSum = 0;
    let oddSum =  0;

    a.forEach((element, index) => {
        //=== exactly equal to zero
        if(index % 2 === 0){
            evenSum += element;
        }else {
            oddSum += element;
        }
    })
    return [evenSum, oddSum];
}

console.log(alternatingSum([100,200,50,40,10]))