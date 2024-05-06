const output = document.getElementById("output");

function show(input)
{
    output.value= output.value+input;
}
function clearDis()
{
    output.value = "";
}
function evaluat() {
    try {
        output.value = eval(output.value);
    }
    catch (error) {
        output.value = "Error";
    }
}