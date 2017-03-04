import _drugs from './drugs.json';


const TIMEOUT = 1000;

export default {
  getDrugs: (cb, timeout) => setTimeout(() => cb(_drugs), TIMEOUT),
  buyDrugs: (payload, cb, timeout) => setTimeout(() => cb(), TIMEOUT)
}
