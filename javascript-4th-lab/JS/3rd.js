// var
// var is function-scoped and has been part of javascript since the begining. It is hosted to is top of  the scope and can lead to unexpected behavior.


function letexample(){
    var x=10;
    console.log(x)
}
// console.log(x)

function letexample(){
    let x=30;
    x=40
    let y=32;
    console.log(x)
}
// varexample
letexample()
// console.log(y)
function constexample(){
    const z=10;
    console.log(z)
    const obj={name:"abinesh"}
    console.log(obj)
    console.name='year'
    console.log(obj)

    // const a=10
    // a=10
    // console.log(a)
}
constexample()

// BEST USES CASES 
// var;
//      us var for legacy code code where refracting to let and const night not be feasible.

//      let:
//      use let for variables that need to be resigned.

//      prefer let in most scenrious where the variables value will change 

//      const:

//      use cont for consistance or variables that should not be resigned 