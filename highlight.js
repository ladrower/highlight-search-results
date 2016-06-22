import _ from 'lodash'

export function highlight(resultString, searchString) {
	let keywords = _.uniq(searchString.trim().replace(/\s+/g, ' ').toLowerCase().split(' ').filter(Boolean))
	if (keywords.length) {
		let tokens
		,	mask = _.fill(new Array(resultString.length), false)
		, 	compareStr = resultString.toLowerCase();
		keywords.forEach(word => {
			let i = 0
			while (~(i = compareStr.indexOf(word, i))) {
				_.fill(mask, true, i, (i += word.length))
			}
		})
		tokens = mask.map((b, i, r) => b ? resultString[i] : (b === r[i+1] ? '' : ' '))
			.join('').trim().split(' ').filter(Boolean)
			.sort((a, b) => a.length < b.length)
		return tokens.length 
			? resultString.replace(
					new RegExp(`(${tokens.map(_.escapeRegExp).join(')|(')})`, 'gi')
				,	$1 => `<span>${$1}</span>`) 
			: resultString
	}
	return resultString
}