export const getEnvEncodeStatus = (): number => {
  return import.meta.env.VITE_USE_ENCODE
    ? parseInt(import.meta.env.VITE_USE_ENCODE)
    : 0;
};
