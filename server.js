const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// 1. 【關鍵設定】明確讓 /public 目錄作為靜態資源對外開放
// 當請求 /public/image/xxx.png 時，會去讀取容器內 /app/public/image/xxx.png
app.use('/public', express.static(path.join(__dirname, 'public')));

// 2. 您的前端 SPA Fallback 路由（必須放在靜態資源路由的【後面】）
// 意思是：如果前面找不到對應的檔案，才把所有路由導向 index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
