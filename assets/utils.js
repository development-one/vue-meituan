/*
* @Author: ccone
* @Date:   2019-11-17 15:51:17
* @Last Modified by:   ccone
* @Last Modified time: 2019-11-18 10:55:52
*/
let timeout = null
export function debounce(fn, wait) {
 	if(timeout !== null) {
		clearTimeout(timeout)
 	} 
 	timeout = setTimeout(fn, wait)
}

let end = null;
export function throttle(fn, delay) {
	if( end && Date.now() - end < delay){
		return ;
	}
	fn()
	end = Date.now()
}
