# 階段一：安裝與編譯
FROM node:20-alpine AS builder
WORKDIR /app

# 複製 package.json 以及 package-lock.json (若存在)
COPY package*.json ./

# 優先採用 npm ci（如有 package-lock.json），否則降級使用 npm install
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# 階段二：運行環境
FROM node:20-alpine
WORKDIR /app

# 從 builder 階段複製依賴
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 【關鍵修正】複製 server.js 以及 public 資料夾（包含作品集靜態檔案）
COPY server.js ./
COPY public/ ./public/

EXPOSE 8080

# 調整檔案權限以符合 OpenShift Arbitrary User ID (UID) 安全規範
RUN chown -R 1001:0 /app && chmod -R g+rwX /app

# 指定非 root 使用者
USER 1001

# 直接以 node 啟動，正確處理 SIGTERM 訊號
CMD ["node", "server.js"]
