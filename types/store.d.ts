declare namespace Store {
  // 全局对象
  namespace Global {
    interface IGlobal {
      token: string;
      useCustomNav: boolean; // 使用自定义导航
    }
  }
  // 用户
  namespace User {
    interface IUserInfo {
      userId: number;
    }
  }
}
