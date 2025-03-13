import dotenv from 'dotenv';

dotenv.config();


export const getEnvVar = (envVarName, defaulValue) => {
  const envVar = process.env[envVarName];

  if (!envVar && defaulValue) {
    return defaulValue; 
  }

  if (!envVar) {
    throw new Error(`Missing env var ${envVarName}`);
  }

  return envVar;
};
