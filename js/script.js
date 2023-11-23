
function getInputFiledValue(elementID){
    const inputFiled = document.getElementById(elementID);
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledString);
    return inputFiledValue;
}

function setEditValue(elementID, setValue){
    const editValue = document.getElementById(elementID);
    editValue.innerText = setValue;
}

function setEditBlock(elementID){
    const editDisplayBlock = document.getElementById(elementID);
    editDisplayBlock.style.display = 'block';
}

document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');

    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter The Number');
    }
    setEditBlock('triangle-edit');
   
    setEditValue('triangle-b-value', triangleBFiledValue);
    setEditValue('triangle-h-value', triangleHFiledValue);
});

document.getElementById('triangle-edit-value').addEventListener('click', function(){
    console.log('Helo');
})