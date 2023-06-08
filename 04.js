function oddFriend (friend){
    var name = friend[100];
    for (element of friend){
        if(element.length%2==1){
            name = element;
            break;
        }
    }
    return name;
}
var friends = oddFriend(['tuhinn','shongram','Mahfuzz','shamim','rasel','mitu','parvej']);
console.log(friends);