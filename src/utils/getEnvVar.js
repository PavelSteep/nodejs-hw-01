export const getEnvVar = (envVarName, defaultValue) => {
  // Если переменная окружения не найдена, вернуть значение по умолчанию
  if (!defaultValue) {
    throw new Error(`Missing env var ${envVarName}`);
  }
  return defaultValue;
};
