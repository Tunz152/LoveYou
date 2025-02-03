const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Cấu hình email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'th4465591@gmail.com',  // Email gửi
    pass: 'mtvx ofgi hkdi pslm'   // Mật khẩu ứng dụng Gmail
  }
});

// Định nghĩa route gửi email
app.post('/send-email', (req, res) => {
  const mailOptions = {
    from: 'th4465591@gmail.com',  // Email gửi
    to: 'luongtrunghieu17122010@gmail.com',  // Email nhận
    subject: 'Thông báo từ website',
    text: 'Có người vừa vào website của bạn!'  // Nội dung thông báo
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Lỗi khi gửi email');
    }
    res.status(200).send('Email đã được gửi');
  });
});

// Đặt server lắng nghe
app.listen(3000, () => {
  console.log('Server đang chạy trên http://localhost:3000');
});
