type TLogger = (msg: string, type?: 'log' | 'warning' | 'error') => void;

const logger: TLogger = (msg, type = 'log') => {
  // @ts-ignore
  console[type](msg);
};

export type { TLogger };
export default logger;
