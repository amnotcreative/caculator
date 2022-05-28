function Slicing(){
    var str = document.getElementById("calc").value;
    document.getElementById("calc").value=str.slice(0, str.length-1);
}