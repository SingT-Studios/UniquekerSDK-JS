# UniquekerSDK-JS
这是一个为水滴聚合登录（uniqueker.top，蜀ICP备2021028672号 | 川公网安备51072302110050号）设计的Javascript-SDK。

官网开发文档：
https://www.yuque.com/wpsea/uniqueker/sqibv6#BNIuU（官网发布）
https://uniqueker.top/doc.php（官网）

使用说明：

1.导入 SDK 并创建实例

    import UniquekerSDK from './UniquekerSDK';

    const uniquekerSDK = new UniquekerSDK({
      appid: 'your-app-id', //后台Appid
      appkey: 'your-app-key', //后台Appkey
      callbackurl: 'your-callback-url', //你设置的回调URL
    });

2.使用

(1)获取登录跳转URL

    const loginResult = await uniquekerSDK.GetUrl('your-platform');
    console.log(loginResult);

(2)回调获取数据

    const loginCallbackData = await uniquekerSDK.LoginCallback('your-type', 'access-token');
    console.log(loginCallbackData);

(3)查询用户数据

    const userInfo = await uniquekerSDK.GetUserInfo('your-type', 'social-uid');
    console.log(userInfo);

