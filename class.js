// let n,m,x;
// let input;
// test();
// function test() {

//     input = prompt("연산자 입력");
//     let x = String(input)
//     input = prompt("첫번째 숫자 입력");
//     n = Number(input);
//     input = prompt("두번째 숫자를 입력");
//     m = Number(input);

//     if(x === "+"){
//         document.write("덧셈결과 : " + (n+m));
//     }

//     else if(x === "-"){
//         document.write("뺼셈결과 : " + (n-m));
//     }

//     else if(x === "x"){
//         document.write("곱셈결과 : " + (n*m));
//     }

//     else if(x === "/"){
//         document.write("나눗셈결과 : " + (n/m) + "..." + (n%m));
//     }
//     else{
//         prompt("연산자 입력이 잘 못 되었습니다.");
//         test();
//     }
//   }

function calc() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var sum = x + y;
    document.getElementById('sum').value = sum;
    
    for(i=0;i<sum;i++){
        if(sum%i == 0){
            document.getElementById('t')(i).value;
        }
    }
}