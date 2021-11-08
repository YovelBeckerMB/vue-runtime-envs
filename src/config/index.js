export const getEnv = (name) => {
  return window?.configs?.[name] || process.env[name]
}

export default {
  var1: getEnv('VUE_APP_VARIABLE_1'),
  var2: getEnv('VUE_APP_VARIABLE_2'),
}