const QUIET = "quiet";
const CLEAR = "clear";
const ERROR = "error";
const ASSERT = "assert";
const WARN = "warn";
const COUNT = "count";
const INFO = "info";
const TIME = "time";
const TIME_END = "timeEnd";
const LOG = "log";
const TRACE = "trace";
const DIR = "dir";
const DIRXML = "dirxml";
const GROUP = "group";
const GROUP_COLLAPSED = "groupCollapsed";
const GROUP_END = "groupEnd";
const DEBUG = "debug";
const TABLE = "table";

/**
 * RFC 5424 6.2.1 Table 2. Syslog Message Severities
 * https://tools.ietf.org/html/rfc5424#section-6.2.1
 */
const getLevelCode = level => {
  switch (level) {
    case QUIET:
    case CLEAR:
      return -1;
    case ERROR:
    case ASSERT:
      return 3;
    case WARN:
      return 4;
    case COUNT:
    case INFO:
    case TIME:
    case TIME_END:
      return 6;
    case LOG:
    case TRACE:
    case DIR:
    case DIRXML:
    case GROUP:
    case GROUP_COLLAPSED:
    case GROUP_END:
    case DEBUG:
    case TABLE:
    default:
      return 7;
  }
};

const getDefaultLevel = () =>
  process.env.NODE_ENV === "production" ? QUIET : LOG;

const getLevel = () =>
  process.env.CSLGR_LEVEL ||
  process.env.REACT_APP_CSLGR_LEVEL ||
  getDefaultLevel();

const isLevelAllowed = level => getLevelCode(level) <= getLevelCode(getLevel());

const noop = () => {};

const logger = level =>
  isLevelAllowed(level)
    ? console[level].bind(console) // eslint-disable-line no-console
    : noop;

export const clear = logger(CLEAR);
export const error = logger(ERROR);
export const assert = logger(ASSERT);
export const warn = logger(WARN);
export const count = logger(COUNT);
export const info = logger(INFO);
export const time = logger(TIME);
export const timeEnd = logger(TIME_END);
export const log = logger(LOG);
export const trace = logger(TRACE);
export const dir = logger(DIR);
export const dirxml = logger(DIRXML);
export const group = logger(GROUP);
export const groupCollapsed = logger(GROUP_COLLAPSED);
export const groupEnd = logger(GROUP_END);
export const debug = logger(DEBUG);
// table is not implemented because it's undefined when jest is run

export default {
  clear,
  error,
  assert,
  warn,
  count,
  info,
  time,
  timeEnd,
  log,
  trace,
  dir,
  dirxml,
  group,
  groupCollapsed,
  groupEnd,
  debug
};
