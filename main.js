// Thay đổi nội dung bức thư ở đây
var letterContent = "Đây là nội dung của bức thư mà người ấy sẽ đọc được. Hãy viết gì đó cho người đó thôi nào. Cảm ơn bạn đã xem";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
var durationWrite = 50;

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    boxLetter.innerHTML = ""; // Xóa nội dung hiện tại của boxLetter trước khi bắt đầu gõ chữ mới
    var letterContentSplited = letterContent.split("");
    var index = 0;

    function writeNextLetter() {
        if (index < letterContentSplited.length) {
            boxLetter.innerHTML += letterContentSplited[index];
            index++;
            setTimeout(writeNextLetter, durationWrite);
        }
    }

    writeNextLetter();
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.toggle("active");
    document.querySelector(".container").classList.toggle("close");
    if (document.querySelector(".cardValentine").classList.contains("active")) {
        setTimeout(effectWrite, 500);
    } else {
        var boxLetter = document.querySelector(".letterContent");
        boxLetter.innerHTML = ""; // Xóa nội dung của boxLetter khi đóng bức thư
    }
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");
});
