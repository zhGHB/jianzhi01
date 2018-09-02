import ajax from '../utils/ajax.js';
export function hotLead(params) {
	return ajax("/lander/lander_list", 1, params);
}