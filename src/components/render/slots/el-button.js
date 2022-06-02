/* eslint-disable prettier/prettier */
export default {
  default (h, conf, key) {
    return conf.__slot__[key]
  },
}
