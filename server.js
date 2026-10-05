const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// 健康檢查端點 (Kubernetes/OpenShift Liveness & Readiness Probe)
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// 主頁面展示
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloud Native Demo | OpenShift</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f4f6f9; color: #333; margin: 0; padding: 40px; display: flex; justify-content: center; }
        .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); max-width: 600px; width: 100%; }
        h1 { color: #ee0000; margin-top: 0; }
        .badge { background: #e1f5fe; color: #0288d1; padding: 4px 12px; border-radius: 20px; font-size: 0.85em; font-weight: bold; display: inline-block; }
        ul { line-height: 1.8; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.85em; color: #777; }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">OpenShift ROSA Running</span>
        <h1>🚀 DevOps & SRE Pipeline Demo</h1>
        <p>這是一個自動透過 Tekton Pipeline 完成 CI/CD 的雲原生示範應用程式。</p>
        <h3>架構亮點：</h3>
        <ul>
          <li><strong>Git Automation</strong>: 變更推送到 Git 即觸發 CI 流程。</li>
          <li><strong>Containerization</strong>: 使用 Multi-stage Dockerfile 與 Buildah 進行打包。</li>
          <li><strong>Zero-Downtime Deployment</strong>: 自動觸發 Rolling Update 與 Route 暴露。</li>
        </ul>
        <div class="footer">
          Namespace: <code>viruskingkk-dev</code> | Deployed via OpenShift Pipelines
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});