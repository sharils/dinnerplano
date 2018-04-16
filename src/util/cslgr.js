// table is not implemented because it's undefined when jest is run
import { mapObjIndexed } from "ramda";

/**
 * RFC 5424 6.2.1 Table 2. Syslog Message Severities
 * https://tools.ietf.org/html/rfc5424#section-6.2.1
 */
const ERROR = "error";
const LOG = "log";
const LEVEL_CODES = {
  clear: -1,
  [ERROR]: 3,
  assert: 3,
  warn: 4,
  count: 6,
  info: 6,
  time: 6,
  timeEnd: 6,
  [LOG]: 7,
  trace: 7,
  dir: 7,
  dirxml: 7,
  group: 7,
  groupCollapsed: 7,
  groupEnd: 7,
  debug: 7
};

const getLevelCode = level => LEVEL_CODES[level] || 7;

const getDefaultLevel = () =>
  process.env.NODE_ENV === "production" ? ERROR : LOG;

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

const methods = mapObjIndexed((_, level) => logger(level), LEVEL_CODES);

export default methods;
