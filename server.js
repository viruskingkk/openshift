const express = require('express');
const app = express();
const path = require('path');

// 【關鍵修正】必須明確告訴 Express 把 /public 目錄作為靜態資源對外開放
app.use('/public', express.static(path.join(__dirname, 'public')));

// 或者是直接將整個專案根目錄下的 public 對應出去：
// app.use(express.static('public'));

// 您的前端 SPA Fallback 路由（通常會放在最下方）
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
