function soNgayTrongThang(thang) {
    let soNgay;
    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        soNgay = 31;
    }
    else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        soNgay = 30;
    }
    else if (thang === 2) {
        soNgay = 28;
    }
    else {
        return "Số tháng không hợp lệ. Vui lòng nhập từ 1 đến 12.";
    }
    return `Tháng ${thang} có ${soNgay} ngày.`;
}
let thang = parseInt(prompt("Nhập số tháng (1-12):"));
console.log(soNgayTrongThang(thang));

