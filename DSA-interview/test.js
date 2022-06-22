var data = [39 , 1, 1,1];
var str = "asdd"

function check (str){
    if(str == "")
    return 0

    return check(str.substring(2)) + 1
}

console.log(check (str))