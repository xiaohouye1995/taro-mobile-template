import Taro from "@tarojs/taro";
import { store } from "@/store/index";
import { navigateToPage } from "@/utils/common";

interface IResponseResult {
  statusCode: number;
  header: any;
  data: IResponseData;
}

interface IResponseData {
  code: number;
  data: any;
  msg: string;
}

const handle404 = () => {
  navigateToPage("/pages/404/index");
};

/**
 * 接口请求
 * @param {*} url
 * @param {*} data
 */
export const request = <T>(params: IRequest): Promise<T> =>
  new Promise((resolve, reject) => {
    const { url, method, data, header, loading, loadingMsg, arrayBuffer } =
      params;
    if (loading) {
      Taro.showLoading({
        title: loadingMsg || "数据请求中",
      });
    }
    Taro.request({
      url: API_ROOT + url,
      method: method,
      data,
      header: {
        ...header,
        "content-type": "application/json",
        token: "Bearer " + store.getState().global.token,
      },
      responseType: arrayBuffer ? "arraybuffer" : "text",
      fail(err: any) {
        console.log("fail----", err);
      },
      success(res: IResponseResult) {
        console.log("success---", res);
        if (loading) {
          Taro.hideLoading();
        }
        if (res.data?.code === 200) {
          resolve(res.data?.data);
          return;
        }
        if (res.data?.code === 404) {
          handle404();
          reject(res.data?.msg || "找不到页面");
          return;
        }
        Taro.showToast({
          icon: "none",
          title: res.data?.msg || "网络开小差了！！！",
        });
        reject(res.data?.msg || "网络开小差了！！！");
      },
    });
  });
