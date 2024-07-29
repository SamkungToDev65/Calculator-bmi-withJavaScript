
document.addEventListener('DOMContentLoaded', function() {
    var weightInput = document.getElementById('inputweight');
    var heightInput = document.getElementById('inputhight');
    var bmiOutput = document.getElementById('outputbmi');
    var categoryOutput = document.getElementById('categoryOutput');
    var btnCalculate = document.querySelector('.btn-custom');

    btnCalculate.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการส่งฟอร์ม

        // ดึงค่าจาก input
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // แปลงจากเซนติเมตรเป็นเมตร

        // ตรวจสอบค่าที่กรอก
        if (isNaN(weight) || isNaN(height) || height === 0) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        // คำนวณค่า BMI
        const bmi = weight / (height * height);

        // กำหนดค่าที่ได้ใน output
        bmiOutput.value = bmi.toFixed(2); // แสดงผลลัพธ์ 2 ตำแหน่งหลังจุดทศนิยม

        // เพิ่มเงื่อนไขการแสดงเกณฑ์มาตรฐาน
        let category = '';
        if (bmi < 18.5) {
            category = 'น้ำหนักต่ำกว่ามาตรฐาน';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'น้ำหนักปกติ';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'น้ำหนักเกิน';
        } else {
            category = 'อ้วน';
        }

        // อัปเดตค่าที่ได้ในช่องเกณฑ์มาตรฐาน
        categoryOutput.value = category;
    });
});

