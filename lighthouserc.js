module.exports = {
  ci: {
    collect: {
      // 配置启动的命令
      // startServerCommand: 'yarn run dev',
      // 测试的页面，可配置多个
      url: ['https://m.chexiaofeng.com/autobee_news/rank_detail/1'],
      // 运行次数，默认3次
      numberOfRuns: 1,
      settings: {
        // 根据实际配置，完整settings可看文档 https://github.com/GoogleChrome/lighthouse/blob/575e29b8b6634bfb280bc820efea6795f3dd9017/types/externs.d.ts#L141-L186
        // 只审查某分类
        onlyCategories: ['performance'],
        // 只执行部分审查
        onlyAudits: ['first-meaningful-paint', 'speed-index','interactive'],
        // 跳过某些审查
        skipAudits:[],
        // 配置网络
        throttling:{}
      }
    },
    upload: {
      serverBaseUrl: "http://localhost:9001",
      token: "87b68d52-f303-4646-a04a-2695b32d2617",
    },
  }
}