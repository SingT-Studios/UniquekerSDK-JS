import $ from "jquery"; // 网络请求包

export class UniquekerSDK {
	constructor(sdkConfig) {
		this.config = {
			appid: sdkConfig.appid,
			appkey: sdkConfig.appkey,
			callbackurl: sdkConfig.callbackurl,
		};
	}

	async _makeAjaxRequest(url, type = "get") {
		try {
			const response = await $.ajax({
				url,
				type,
				dataType: "json",
			});

			if (response.code !== 0) {
				throw new Error(response.message || "服务器返回错误");
			}

			return response;
		} catch (error) {
			console.error(error);
			throw new Error("请求失败");
		}
	}

	async GetUrl(Platform) {
		const url = `https://uniqueker.top/connect.php?act=login&appid=${this.config.appid}&appkey=${this.config.appkey}&type=${Platform}&redirect_uri=${this.config.callbackurl}`;

		const response = await this._makeAjaxRequest(url);

		if (response.qrcode) {
			window.location.href = response.qrcode;
			return "跳转二维码登录";
		}

		window.location.href = response.url;
		return "跳转页面登录";
	}

	async LoginCallback(type, access_token) {
		const url = `https://uniqueker.top/connect.php?act=callback&appid=${this.config.appid}&appkey=${this.config.appkey}&type=${type}&code=${access_token}`;

		return this._makeAjaxRequest(url);
	}

	async GetUserInfo(type, social_uid) {
		const url = `https://uniqueker.top/connect.php?act=query&appid=${this.config.appid}&appkey=${this.config.appkey}&type=${type}&social_uid=${social_uid}`;

		return this._makeAjaxRequest(url);
	}
}
