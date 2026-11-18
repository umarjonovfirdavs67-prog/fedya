
let son = Number(prompt("Birinchi sonni kiriting:"));
let son1 = Number(prompt("Ikkinchi sonni kiriting:"));

let tanlov = confirm("Agar 'OK' tugmasini bossangiz siz kiritgan raqamlar bir biriga qo'shladi\nAgar 'OTMEHA' tugmasini bossangiz siz kiritgan raqamlar bir biridan ayriladi");

if (tanlov == true) {
    alert(son + " + " + son1 + " = " + (son + son1));
} else {
    if (son < son1) {
        alert(son +  + son1 + " sonidan kichik bo'lgani uchun ayirish amalga oshirilmadi!");
    } else {
        alert(son + " - " + son1 + " = " + (son - son1));
    }
}