TypeScript Vite React Readable Code Demo
========================================

以源代码方式展示React错误栈，方便debug。关键配置:

```ts
// vite.config.ts
export default defineConfig({
  build: {
    minify: false // 关闭代码压缩,保持错误栈可读
  }
})
```

## 运行

```bash
npm install
npm start
```

点击按钮查看错误栈。

## 关键点

1. 项目使用Vite的开发模式运行,不会压缩代码,保持源码可读性
2. 点击按钮会抛出一个示例错误
3. 在浏览器控制台(DevTools)中可以看到:
   - 完整的错误信息
   - React组件调用栈
   - 准确的源码位置

## 开发环境配置

为了获得最佳的调试体验:

1. 确保使用开发模式运行 (`npm start`)
2. 不要使用生产构建,因为会压缩代码
3. 在Chrome DevTools中:
   - 保持"Preserve log"选项开启
   - 在Sources面板中可以看到未压缩的源码
   - 可以设置断点进行调试

## 为什么不压缩代码?

在开发和调试时,不压缩代码很重要:

1. 错误栈会显示实际的函数名和文件名
2. 源码映射更准确
3. 更容易理解错误发生的位置
4. 可以直接在DevTools中检查和调试源码
