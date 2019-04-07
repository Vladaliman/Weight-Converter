//seting the visibility to hidden till the input
document.querySelector('#output').style.visibility = 'hidden';

// adding a event listener to the input
document.querySelector('#lbsInput').addEventListener('input', (e)=>{
    //seting the output to be visible
    document.querySelector('#output').style.visibility = 'visible';

    //geting the pounds value from the input
    let lbs = e.target.value;
    
    //grabing the grams output and seting the expected value
    document.querySelector('#gramsOutput').innerHTML =  (lbs / 0.0022046).toFixed(2);
    
    //same for kg
    document.querySelector('#kgOutput').innerHTML =  (lbs / 2.2046).toFixed(2);
    
    //same for ounces
    document.querySelector('#ozOutput').innerHTML = lbs*16;
});