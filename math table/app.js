// var a = document.getElementById("inputno");
var d=prompt("enter your input numer here");
var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var b=0;
document.write("<table border=1px solid black>" );
// document.write("<tr>" + "<br>")
for(var i=1; i<=10; i++){
    var c = d*arry[b];
    document.write("<tr>")
    document.write( "<td>" + d  + "*" + arry[b] + "=" + c + "</td>" );
    document.write("</tr>"  );
    b++;
}
// document.write("</tr>" + "<br>");
 document.write("</table");
// console.log(a);