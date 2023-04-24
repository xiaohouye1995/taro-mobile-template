/// <reference types="@tarojs/taro" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
  }
}

declare const API_ROOT: string;
declare const H5_ROOT: string;

declare interface IProps {
  children?: any;
}

declare interface IRequest {
  url: string;
  method: "POST" | "GET";
  data?: any;
  header?: any;
  loading?: boolean;
  loadingMsg?: string;
  arrayBuffer?: boolean;
}
