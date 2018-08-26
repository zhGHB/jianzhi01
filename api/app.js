import ajax from '../utils/ajax.js';

export function getCode(params) {
	return ajax("/base/get_openid",1,params)
}