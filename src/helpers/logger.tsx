type TLogger = (msg: string, type?: 'log' | 'warning' | 'error') => void;

const logger: TLogger = (msg, type = 'log') => {
  // TODO: create better one and figure out why is it throws error
  // @ts-ignore
  console[type](msg);
};

export type { TLogger };
export default logger;
