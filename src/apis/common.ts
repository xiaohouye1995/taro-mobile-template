/**
 * @author 周俊阳
 * @desc 全局接口
 */
import { request } from "@/utils/request";

/**
 * 参考接口需删除
 * @param id
 */
export const delUser = (id: string) =>
  request({
    url: "api/wx/delUser",
    method: "POST",
    loading: true,
    data: { id: id },
  });

/**
 * 参考接口需删除
 */
export const getUserInfo = (): Promise<Store.User.IUserInfo> =>
  request({
    url: "api/wx/user",
    method: "GET",
    data: { id: "222", type: "333" },
  });
