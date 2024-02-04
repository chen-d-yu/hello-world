import log4js from "log4js";

export default function () {
  // 获取log4j的实例
  const logger = log4js.getLogger();

  // 默认的级别是 OFF，表示不打印任何日志，这里修改级别为debug，表示打印debug以下的日志
  logger.level = "debug";

  logger.debug("Some debug messages");
  logger.info("Some info messages");
  logger.warn("Some warning messages");
}
