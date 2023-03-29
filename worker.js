onmessage = function(e) {
	// the passed-in data is available via e.data
	const seconds = parseInt(e.data)
	wait(seconds)
	function wait(seconds) {
		let start = new Date()
		console.log('Started waiting on some heavy computation...')
		let begin = performance.now()
		while((new Date() - start) / 1000 < seconds) {}
		const result = performance.now() - begin
		console.log('finished in about: ' + Math.round(result / 1000) + ' seconds')
	}
}


