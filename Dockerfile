# 階段一：安裝與編譯
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# 階段二：運行環境
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY server.js ./

EXPOSE 8080
USER 1001

CMD ["npm", "start"]