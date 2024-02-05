import log4js from "log4js";
import config from "./config.js";

export default function () {
  log4js.configure(config);

  // 获取categories的default分组实例，当分组key为default时，可不传递key值
  const defaultLogger = log4js.getLogger();

  // // 获取app分组实例
  // const appLogger = log4js.getLogger("app");

  // 分别打印两个分组日志
  defaultLogger.debug("Some debug messages");
  // appLogger.debug("Some debug messages");
}
