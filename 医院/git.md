### git

- 配置

  ```shell
  git config --global user.name "zhanghan"
  git config --global user.email "zhanhan321@126.com"
  // 查看配置信息
  git config --global --list
  ```

- 使用

  ```shell
  git status // 查看当前状态
  git add // 把工作区提交到暂存区
  git commit -m "描述" // 提交到本地仓库
  git log // 输出提交日志
  ssh-keygen -t rsa -C "zhanhan321@126.com" // 生成公钥和私钥
  // id_rsa(私钥)  id_rsa.pub(公钥)
  ssh -T git@github.com  // 测试远程连接
  git push -u origin master  // 推送到github
  
  ```

  