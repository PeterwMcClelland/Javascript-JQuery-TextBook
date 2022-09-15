
function doMath() {
    var people = document.getElementById('people').value;
    var hours = document.getElementById('hours').value;

    var theProduct = parseInt(people) * parseInt(hours) * 5;  
    document.write(theProduct);

}