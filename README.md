TypeScript Vite React Readable Code Demo
===========================

好像禁用minify就可以了。它会自动去掉注释并tree-shaking。

```
build: {
    minify: false,
}
```

TODO: 怎么才能保持comment不删除？

```
npm install
npm start
```

It will open page on browser automatically.

```
pnpm run build
```

然后看 dist/assets/index-*.js
