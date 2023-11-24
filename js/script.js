function getInputFiledValue(elementID){
    const inputFiled = document.getElementById(elementID);
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledString);
    return inputFiledValue;
}

function getInputFiledInnerText(elementID){
    const inputFiled = document.getElementById(elementID);
    const inputFiledString = inputFiled.innerText;
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

function setEditValueOnInputFiled(editvalueInputElementID, editvalueElementID){
    const editValueInputFiled = document.getElementById(editvalueInputElementID);
    const editValue = document.getElementById(editvalueElementID)
    editValueInputFiled.value = editValue.innerText;
}

function areaCalculation(elementName, result){
    const areaCalculation = document.getElementById('area-calculation');
    const newElement = document.createElement('li');
    newElement.innerHTML = `<div class="flex items-center flex-wrap justify-between gap-3 text-[#414141] text-base font-normal">
    <span>${elementName}</span>
    <span><span>${result}</span>cm<sup>2</sup></span>
    <button class="bg-[#1090D8] text-[#fff] text-sm font-medium px-4 py-2 rounded-md">Covert to m<sup>2</sup></button>
    </div>`;
    areaCalculation.appendChild(newElement);
}

function valueFiledArea(elementID, propartyValue){
    const valueFiled = document.getElementById(elementID);
    valueFiled.style.display = propartyValue;
}

function calculateBtn(bFiledValue, hFiledValue, edit, bValue, hValue, valueFiled, propartyValue){
    const triangleBFiledValue = getInputFiledValue(bFiledValue);
    const triangleHFiledValue = getInputFiledValue(hFiledValue);
    // display Block
    setEditBlock(edit);
    // Edit Value
    setEditValue(bValue, triangleBFiledValue);
    setEditValue(hValue, triangleHFiledValue);
    // disabled Area
    valueFiledArea(valueFiled, propartyValue);
}

function calulationPoint(bValue, hValue, point, name){
        // Calulation
    const triangleEditBValue = getInputFiledInnerText(bValue);
    const triangleEditHValue = getInputFiledInnerText(hValue);
    const result = point * triangleEditBValue * triangleEditHValue;
    // Area Calculation
    areaCalculation(name, result);
}

function calulation(bValueId, hValueId, name){
    // Calulation
    const EditBValue = getInputFiledInnerText(bValueId);
    const EditHValue = getInputFiledInnerText(hValueId);
    const result = EditBValue * EditHValue;
    // Area Calculation
    areaCalculation(name, result);
}

function editValue(editUpdate, bFiled, bValue, hFiled, hValue, valueFiled, proparty, edit, propartyValue){
    setEditBlock(editUpdate);
    setEditValueOnInputFiled(bFiled, bValue);
    setEditValueOnInputFiled(hFiled, hValue);
    valueFiledArea(valueFiled, proparty);
    valueFiledArea(edit, propartyValue);
}

function editUpdate(edit, block, bFiled, hFiled, bValue, hValue, valueFiled, none){
    valueFiledArea(edit, block);
    const triangleBFiledValue = getInputFiledValue(bFiled);
    const triangleHFiledValue = getInputFiledValue(hFiled);
    
    setEditValue(bValue, triangleBFiledValue);
    setEditValue(hValue, triangleHFiledValue);

    valueFiledArea(valueFiled, none);
}

document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }

    calculateBtn('triangle-b-filed', 'triangle-h-filed', 'triangle-edit', 'triangle-b-value', 'triangle-h-value', 'triangle-value-filed', 'none');

    calulationPoint('triangle-b-value', 'triangle-h-value', 0.5, 'Triangle');

});

document.getElementById('triangle-edit-value').addEventListener('click', function(){

    editValue('triangle-edit-update', 'triangle-b-filed', 'triangle-b-value', 'triangle-h-filed', 'triangle-h-value', 'triangle-value-filed', 'block', 'triangle-edit', 'none');
});

document.getElementById('triangle-edit-update').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    editUpdate('triangle-edit', 'block', 'triangle-b-filed', 'triangle-h-filed', 'triangle-b-value', 'triangle-h-value', 'triangle-value-filed', 'none');
});

    // Rectangle Area

document.getElementById('Rectangle-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('Rectangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('Rectangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    
    calculateBtn('Rectangle-b-filed', 'Rectangle-h-filed', 'Rectangle-edit', 'Rectangle-b-value', 'Rectangle-h-value','Rectangle-value-filed', 'none');

    calulation('Rectangle-b-value', 'Rectangle-h-value', 'Rectangle');
});

document.getElementById('Rectangle-edit-value').addEventListener('click', function(){

    editValue('Rectangle-edit-update', 'Rectangle-b-filed', 'Rectangle-b-value', 'Rectangle-h-filed', 'Rectangle-h-value', 'Rectangle-value-filed', 'block', 'Rectangle-edit', 'none');
});

document.getElementById('Rectangle-edit-update').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    editUpdate('Rectangle-edit', 'block', 'Rectangle-b-filed', 'Rectangle-h-filed', 'Rectangle-b-value', 'Rectangle-h-value', 'Rectangle-value-filed', 'none');
});

    // Parallelogram Area

document.getElementById('Parallelogram-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('Parallelogram-b-filed');
    const triangleHFiledValue = getInputFiledValue('Parallelogram-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }

    calculateBtn('Parallelogram-b-filed', 'Parallelogram-h-filed', 'Parallelogram-edit', 'Parallelogram-b-value', 'Parallelogram-h-value','Parallelogram-value-filed', 'none');

    calulation('Parallelogram-b-value', 'Parallelogram-h-value', 'Parallelogram');
});

document.getElementById('Parallelogram-edit-value').addEventListener('click', function(){

    editValue('Parallelogram-edit-update', 'Parallelogram-b-filed', 'Parallelogram-b-value', 'Parallelogram-h-filed', 'Parallelogram-h-value', 'Parallelogram-value-filed', 'block', 'Parallelogram-edit', 'none');
});

document.getElementById('Parallelogram-edit-update').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    editUpdate('Parallelogram-edit', 'block', 'Parallelogram-b-filed', 'Parallelogram-h-filed', 'Parallelogram-b-value', 'Parallelogram-h-value', 'Parallelogram-value-filed', 'none');
});

    // Rhombus Area

document.getElementById('Rhombus-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('Rhombus-b-filed');
    const triangleHFiledValue = getInputFiledValue('Rhombus-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }

    calculateBtn('Rhombus-b-filed', 'Rhombus-h-filed', 'Rhombus-edit', 'Rhombus-b-value', 'Rhombus-h-value','Rhombus-value-filed', 'none');

    calulationPoint('Rhombus-b-value', 'Rhombus-h-value', 0.5, 'Rhombus');
});

document.getElementById('Rhombus-edit-value').addEventListener('click', function(){

    editValue('Rhombus-edit-update', 'Rhombus-b-filed', 'Rhombus-b-value', 'Rhombus-h-filed', 'Rhombus-h-value', 'Rhombus-value-filed', 'block', 'Rhombus-edit', 'none');
});

document.getElementById('Rhombus-edit-update').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    editUpdate('Rhombus-edit', 'block', 'Rhombus-b-filed', 'Rhombus-h-filed', 'Rhombus-b-value', 'Rhombus-h-value', 'Rhombus-value-filed', 'none');
});

    // Pentagon Area

document.getElementById('Pentagon-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('Pentagon-b-filed');
    const triangleHFiledValue = getInputFiledValue('Pentagon-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }

    calculateBtn('Pentagon-b-filed', 'Pentagon-h-filed', 'Pentagon-edit', 'Pentagon-b-value', 'Pentagon-h-value','Pentagon-value-filed', 'none');

    calulationPoint('Pentagon-b-value', 'Pentagon-h-value', 0.5, 'Pentagon');
});

document.getElementById('Pentagon-edit-value').addEventListener('click', function(){

    editValue('Pentagon-edit-update', 'Pentagon-b-filed', 'Pentagon-b-value', 'Pentagon-h-filed', 'Pentagon-h-value', 'Pentagon-value-filed', 'block', 'Pentagon-edit', 'none');
});

document.getElementById('Pentagon-edit-update').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    editUpdate('Pentagon-edit', 'block', 'Pentagon-b-filed', 'Pentagon-h-filed', 'Pentagon-b-value', 'Pentagon-h-value', 'Pentagon-value-filed', 'none');
});

    // Ellipse Area

document.getElementById('Ellipse-calculate-btn').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('Ellipse-b-filed');
    const triangleHFiledValue = getInputFiledValue('Ellipse-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }

    calculateBtn('Ellipse-b-filed', 'Ellipse-h-filed', 'Ellipse-edit', 'Ellipse-b-value', 'Ellipse-h-value','Ellipse-value-filed', 'none');

    // Calulation
    const EditBValue = getInputFiledInnerText('Ellipse-b-value');
    const EditHValue = getInputFiledInnerText('Ellipse-h-value');
    let result = Math.PI * EditBValue * EditHValue;
    result = result.toFixed(2);

    // Area Calculation
    areaCalculation('Ellipse', result);
});

document.getElementById('Ellipse-edit-value').addEventListener('click', function(){

    editValue('Ellipse-edit-update', 'Ellipse-b-filed', 'Ellipse-b-value', 'Ellipse-h-filed', 'Ellipse-h-value', 'Ellipse-value-filed', 'block', 'Ellipse-edit', 'none');
});

document.getElementById('Ellipse-edit-update').addEventListener('click', function(){
    const triangleBFiledValue = getInputFiledValue('triangle-b-filed');
    const triangleHFiledValue = getInputFiledValue('triangle-h-filed');
    if(isNaN(triangleBFiledValue) || isNaN(triangleHFiledValue)){
        return alert('Places Enter Your Value');
    }
    editUpdate('Ellipse-edit', 'block', 'Ellipse-b-filed', 'Ellipse-h-filed', 'Ellipse-b-value', 'Ellipse-h-value', 'Ellipse-value-filed', 'none');
});