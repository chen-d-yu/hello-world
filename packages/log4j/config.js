import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @type {import("log4js").Configuration}
 */
const config = {
  // 输出源
  appenders: {
    // 定义一个out的输出源，type表示将日志输出到控制台
    out: {
      type: "console"
    },
    app: {
      type: "console"
    },
    fileout: {
      type: "file",
      filename: resolve(__dirname, "./logs/app.log"),
      maxLogSize: 200, // 单位字节
      backups: 5,
      encoding: "utf-8"
    },
    datefileout: {
      type: "dateFile",
      filename: resolve(__dirname, "./logs/app.log"),
      pattern: ".yyyy-MM-dd",
      alwaysIncludePattern: true,
      maxLogSize: 200,
      backups: 5,
      encoding: "utf-8"
    },
    basic: {
      type: "console",
      layout: {
        type: "basic"
      }
    },
    colored: {
      type: "console",
      layout: {
        type: "colored"
      }
    },
    messagePassThrough: {
      type: "console",
      layout: {
        type: "messagePassThrough"
      }
    },
    dummy: {
      type: "console",
      layout: {
        type: "dummy"
      }
    },
    pattern: {
      type: "console",
      layout: {
        type: "pattern",
        pattern: "%d %p %c %m%n"
      }
    },
    customLayout: {
      type: "console",
      layout: {
        type: "json",
        separator: "," // 分隔符
      }
    }
  },
  // 定义实例日志级别，如果要在config中配置的话，需要添加上自定义样式以及级别数值，数值越大，级别越高
  // 默认情况下，ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
  // OFF 表示关闭日志打印，而不是作为实际的日志级别，所以你不能调用 logger.OFF('some message') 打印日志
  levels: {},
  // 将日志输出源进行分组，可以使用 log4js.getLogger('app') 来获取对应的分组
  // 分组的作用，为了让输出日志进行分组区分日志，
  // 比如默认的输出日志：[2024-02-05T15:28:12.820] [DEBUG] default - Some debug messages
  // 获取到debug分组的日志：[2024-02-05T15:28:12.820] [DEBUG] debug - Some debug messages
  // 他们的区别，就在于[DEBUG]的打印级别后面的 default 和 debug的区分
  categories: {
    default: {
      appenders: ["out"],
      level: "DEBUG"
    },
    app: {
      appenders: ["pattern", "app", "datefileout"],
      level: "DEBUG"
    }
  }
};

export default config;
