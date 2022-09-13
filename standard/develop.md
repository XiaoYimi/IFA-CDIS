## 项目规范

### 开发规范

仓库管理器： 统一以 `git` 来管理项目仓库.
文件夹命名： 以 `完整的小写字母` 命令.
文件名命名： 以 `完整的小写字母` 命令；或以 `横线` 拼接 `完整的小写字母`.

特殊情况：

- 自定义组件：以 `首字母大写的完整单词` 命名.

### 代码编辑

代码格式化： 统一以 `prettier` 格式来开发.
格式化检查： 统一以 `eslint` 来检测语法.
原子样式类： 统一以 `tailwindcss` 原子库 + `sass` 格式库.
路由对象定义：统一以 `横线` 来拼接 `目录名`,`文件名(!index)`
图标对象定义： 统一以 `icon-[dir]-[name]` 格式来定义,以 `[dir]-[name]` 来使用.

### 项目优化

- 建议少用 `export default` 返回模块对象，多用 `export` 导出模块对象(利于 tree shaking); 除非必要以 `export default` 返回模块对象.

### 其它相关

- [ ] 未勾选
- [x] 已勾选
- [ ] 测试