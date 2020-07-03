var inputHeight = document.querySelector('#height');
var inputWeight = document.querySelector('#weight');
var btnSend = document.querySelector('.send');
var btnClear = document.querySelector('.clear');
var recordList = document.querySelector('.list');

var bmiRecord = [];

// 確認 button
btnSend.addEventListener("click", function(){
  calculateBMI();
});

// 全部清除 button
btnClear.addEventListener("click", function(){
  var length = bmiRecord.length;
  bmiRecord.splice(0, length);
  render();
  inputHeight.value = '';
  inputWeight.value = '';
});

// 渲染畫面
function render(){
  var str = '';
  bmiRecord.forEach(function(item){
    var content = `<li class="list-card"><h2>${item.status}</h2>
<p>BMI: ${item.bmi}</p>
<p>height: ${item.height}cm</p>
<p>weight: ${item.weight}kg</p>
</li>`;
    str += content;
  });
  recordList.innerHTML = str;
}

// 計算bmi值
function calculateBMI(){
  var height = parseInt(inputHeight.value) / 100;
  var weight = parseInt(inputWeight.value);
  
  var bmi = (weight / (height * height)).toFixed(1);
  
  var userInfo = {
    "height": inputHeight.value,
    "weight": inputWeight.value,
    "bmi": bmi,
    "status":''
  };
  
  if (bmi < 18.5) {
    userInfo.status = "體重過輕";
  } else if (bmi >= 18.5 && bmi < 24){
    userInfo.status = "正常";
  } else if (bmi >= 24 && bmi < 27){
    userInfo.status = "體重過重";
  } else if (bmi >= 27 && bmi < 30){
    userInfo.status = "輕度肥胖";
  } else if (bmi >= 30 && bmi < 35){
    userInfo.status = "中度肥胖";
  } else {
    userInfo.status = "重度肥胖";
  }
  
  bmiRecord.push(userInfo);
  
  render();
  
  inputHeight.value = '';
  inputWeight.value = '';
}
