var defangIPaddr = function(address) {
    let addressArr = address.split(".");
    let defangStr = '';

    for(let i = 0; i < addressArr.length - 1; i++){
    	defangStr = defangStr + addressArr[i] +'[.]';
    }
    defangStr = defangStr + addressArr[addressArr.length - 1];

    return defangStr;

};

defangIPaddr('255.100.50.0');