document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const bmiValueElement = document.getElementById('bmi-value');
    const bmiCategoryElement = document.getElementById('bmi-category');
    
    // 添加事件监听器
    calculateBtn.addEventListener('click', calculateBMI);
    heightInput.addEventListener('input', autoCalculate);
    weightInput.addEventListener('input', autoCalculate);
    
    // 自动计算BMI（当两个输入框都有值时）
    function autoCalculate() {
        if (heightInput.value && weightInput.value) {
            calculateBMI();
        }
    }
    
    // 计算BMI的函数
    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        
        if (height > 0 && weight > 0) {
            // 将厘米转换为米并计算BMI
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            const bmiRounded = parseFloat(bmi.toFixed(1));
            
            // 显示BMI值
            bmiValueElement.textContent = bmiRounded;
            
            // 确定BMI分类
            let category = '';
            let categoryClass = '';
            
            if (bmi < 18.5) {
                category = '体重过轻';
                categoryClass = 'underweight';
            } else if (bmi >= 18.5 && bmi < 24) {
                category = '体重正常';
                categoryClass = 'normal';
            } else if (bmi >= 24 && bmi < 28) {
                category = '超重';
                categoryClass = 'overweight';
            } else {
                category = '肥胖';
                categoryClass = 'obese';
            }
            
            // 显示BMI分类
            bmiCategoryElement.textContent = category;
            
            // 移除所有分类类名并添加当前分类类名
            bmiCategoryElement.className = 'bmi-category';
            bmiCategoryElement.classList.add(categoryClass);
            
            // 显示结果区域
            resultDiv.classList.remove('hidden');
        }
    }
});