import { createModel } from '@rematch/core'
import Taro from '@tarojs/taro'
import { isUseCustomNav } from '@/utils/common'
import { RootModel } from '.'

export const global = createModel<RootModel>()({
  state: {
    token: Taro.getStorageSync('token') || '',
    useCustomNav: false,
  } as Store.Global.IGlobal,
  reducers: {
    setTokenSync: (state, userToken: string) => {
      return {
        ...state,
        userToken,
      }
    },
    setUseCustomNavSync: (state, useCustomNav: boolean) => {
      return {
        ...state,
        useCustomNav,
      }
    },
  },
  effects: (dispatch) => ({
    setToken(token: string) {
      dispatch.global.setTokenSync(token)
      Taro.setStorageSync('token', token)
    },
    cleanToken() {
      dispatch.global.setTokenSync('')
      Taro.removeStorageSync('token')
    },
    setUseCustomNav() {
      dispatch.global.setUseCustomNavSync(isUseCustomNav())
    },
  }),
})
