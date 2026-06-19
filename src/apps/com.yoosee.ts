import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.yoosee',
  name: '有看头',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击-忽略此次',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[text="马上升级"] + [text="忽略此次"]',
          snapshotUrls: 'https://i.gkd.li/i/29120887',
        },
      ],
    },
  ],
});
