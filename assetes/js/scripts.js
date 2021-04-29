let val1,val2,total;
let txtResult=document.getElementById('txtResult');
function number(n){
    txtResult.value+=n;
}
function clearText(){
    txtResult.value="";
}
function squareRoot(){
    let num=txtResult.value;
    let sum=Math.sqrt(num,2);
    txtResult.value=sum;
}
let op="";
function operator(op1){
    op=op1;
    val1=document.getElementById('txtResult').value;
    txtResult.value="";
}
function exqual(){
    val2=txtResult.value;
    if(val1!=""){
        if(op=="+")
            total=parseFloat(val1)+parseFloat(val2);
        else if(op=="-")
            total=val1-val2;
        else if(op=="*")
            total=val1*val2;
        else if(op=="/")
            if(val2==0)
                total="Error";
            else
                total=val1/val2;
        txtResult.value=total;
    }
}