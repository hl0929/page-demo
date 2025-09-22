# 动态Hello World - CI/CD示例

这是一个展示GitHub Actions CI/CD流程的动态Hello World应用。

## 功能特性

- 🌍 多语言动态问候语
- ⚡ 实时更新显示
- 🧪 自动化测试
- 🔄 自动化部署
- 📊 健康检查端点

## CI/CD流程

1. **测试阶段**: 运行单元测试
2. **构建阶段**: 验证应用构建
3. **部署阶段**: 模拟生产环境部署
4. **通知阶段**: 发送流程状态通知

## 本地运行

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 生产模式运行
npm start

# 运行测试
npm test