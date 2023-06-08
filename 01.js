// Error Fixed
function anaToVori (ana){
    if (ana>=0){
        const vori = 0.0625 * ana;
        return console.log(vori);;
    }
    else{
        console.log('Please input a positive number');
    }
}
const voriResult = anaToVori(16);
