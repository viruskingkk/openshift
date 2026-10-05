const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// 設定靜態檔案託管
app.use(express.static(path.join(__dirname, 'public')));

// 所有請求導向作品集 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
