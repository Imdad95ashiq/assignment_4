// Error Fixed
function pandaCost (singara,samosa,jilapi){
    if(singara>=0 && samosa>=0 && jilapi >= 0){
        var singaraValue = 7 * singara;
        var samosaValue = 10 * samosa;
        var jilapiValue = 15 * jilapi;
        var totalCost = singaraValue+samosaValue+jilapiValue;
        return console.log(totalCost);
    }
    else{
        console.log('Please cheek your input. Your three input field must be positive');
    }

}
const pandaResult = pandaCost (1,1,1);
// console.log(pandaResult);