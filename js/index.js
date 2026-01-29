// 
//  const data= (name,age,branch)=>{

 
//     return"hii"+name+"myage is"+age+"my branchis"+branch;
// }
// let name="chandramani";
// let age=21;
// var branch="cse";
// console.log("hi my"+name);
// function info(str="hii"){
//     console.log("hello"+str);

// }
// info("how r u");


//IIFE
// (()=>{
//     console.log("hii, inside function")

// })();
// setTimeout(function(){console.log("hii")},10000);

function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javacompiler(){
            return"java compiler calling"
        }

        data=javacompiler();

    }
    else if(lang=='c'){
        function cCompiler(){
            return " c compiler cslling";
        }
        data=cCompiler();

    }
    else{
        data="language not supported"
    }
    return data;
}


console.log(selectlanguage("java"));
console.log(selectlanguage("python"));
console.log(selectlanguage("c++"));
