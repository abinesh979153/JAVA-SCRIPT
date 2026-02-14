function example() {
    var a = 1; //fuction-scoped
    let b = 2;  //block-scoped
    const c = 3; //block-scoped , const value

    if (true) {
        var a = 4;  //same variable as above
        let b = 5;  //different variable, block-scoped
        const c = 6;  //different variable, block-scoped
        console.log(a);   //4
        console.log(b);     //5   
        console.log(c);     //6   
    }
    console.log(a); //variable is function in scoped
    console.log(b);  //let is blocked
    console.log(c);  //const is blocked scoped
}

example();