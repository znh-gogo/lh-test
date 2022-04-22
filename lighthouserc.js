/*
 * @Description: 
 * @Author: znh
 * @Date: 2022-04-20 14:11:01
 */
module.exports = {
  ci: {
    collect: {
      // 配置启动的命令
      // startServerCommand: 'yarn run dev',
      // 测试的页面，可配置多个
      url: ['https://m.chexiaofeng.com/autobee_news/rank_detail/1',
    'https://m.chexiaofeng.com/autobee_news/compareDoubleCar/detail?car_model_ids=%5B51423,52333%5D&h5_share=1&from=cxf'],
      // 运行次数，默认3次
      numberOfRuns: 3,
      settings: {
        // 根据实际配置，完整settings可看文档 https://github.com/GoogleChrome/lighthouse/blob/575e29b8b6634bfb280bc820efea6795f3dd9017/types/externs.d.ts#L141-L186
        // 只审查某分类
        onlyCategories: ['performance'],
        // 只执行部分审查
        onlyAudits: ['first-meaningful-paint', 'speed-index','interactive'],
        // 跳过某些审查
        // skipAudits:[],
        // 配置网络
        throttling:{}
      }
    },
    upload: {
      serverBaseUrl: "http://192.168.6.43:18405",
      token: "5e92d531-d1ca-4dcd-9c57-2f3ee3a369fa",
      basicAuth: {
        username: "admin",
        password: "123456"
      }
    },
  }
}