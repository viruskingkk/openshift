\# OpenShift Portfolio Demo App



這是推送到 OpenShift ROSA 並透過 Tekton CI/CD Pipeline 完成建置與部署的輕量作品集專案。



\## 🚀 快速推送到 Git 步驟



在終端機 (Terminal) 中執行：



```bash

\# 1. 初始化 Git 專案

git init

git branch -M main



\# 2. 加入所有檔案並 Commit

git add .

git commit -m "feat: initial commit with OpenShift pipeline and express app"



\# 3. 綁定您的 GitHub / GitLab Repo 並 Push

git remote add origin <YOUR\_GIT\_REPO\_URL>

git push -u origin main

