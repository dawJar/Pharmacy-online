// mocking client-server processing
import _drugs from './drugs.json';

// console.log('here: '+ typeof _drugs + _drugs);

const TIMEOUT = 1000;

export default {
  getDrugs: (cb, timeout) => setTimeout(() => cb(_drugs), timeout || TIMEOUT),
  buyDrugs: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
