/** redis key  */
export const redisKey = (key: string, value: string): string => `${key}:${value}`;
