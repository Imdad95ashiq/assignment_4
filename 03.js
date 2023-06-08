// Error fixed
function picnicBudget (member){
    const first100 = 5000;
    const second200 = 4000;
    const third300 = 3000;
    if (member<=100){
        if(member>=0){
            const firstAmount = first100 * member;
            return firstAmount;
        }
        else{
            console.log('Please input positive number');
            return '';
        }
    }
    else if (member<=200){
        if(member>=0){
            const reCount100 = member - 100;
            const secondMember= second200 * reCount100;
            const second = first100 * 100;
            const secondAmount = secondMember + second;
            return secondAmount;
        }
        else{
            console.log('Please input positive number');
            return '';
        }
    }
    else{
        if(member>=0){
            const reCount200 = member - 200;
            const thirdMember = reCount200 * third300;
            const third1 = first100 * 100;
            const third2 = second200 * 100;
            const thirdAmount = thirdMember + third1 + third2;
            return thirdAmount;
        }
        else{
            console.log('Please input positive number');
            return '';
        }
    }
}
var totalMember = picnicBudget(-500);
console.log(totalMember);