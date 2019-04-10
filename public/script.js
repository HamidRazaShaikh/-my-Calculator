/**
 * Created by COMPUTER POINT on 4/10/2019.
 */

function numdisplay (num){
    var input  = document.getElementById("input");
    input.value += num ;
}

function CE (){
    document.getElementById("input").value = null

}

function clearone (){
    var input = document.getElementById("input");
    var cl = input.value ;
    if ( cl > 0 ){
        cl = cl.substring(0,cl.length-1);
        input.value = cl
    }

}

function multipication (){

    var input  = document.getElementById("input");
    input.value += "*"

}

function division (){

    var input  = document.getElementById("input");
    input.value += "/"

}

function addition (){

    var input  = document.getElementById("input");
    input.value += "+"

}

function subtraction (){

    var input  = document.getElementById("input");
    input.value += "-"

}

function decimal (){

    var input  = document.getElementById("input");
    input.value += "."

}


function equal () {


    var input = document.getElementById("input");
    var answer = eval(input.value);
    input.value = answer;
}

function sqirt (){
    var input = document.getElementById("input");
    var sqrkt = Math.sqrt(input.value);
    input.value = sqrkt

}

function percent (){

    var input = document.getElementById("input");
    var perc =( eval(input.value))/100;
    input.value = perc;
}