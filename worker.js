onmessage = (event) => {
	const seconds = parseInt(event.data)
	wait(seconds)
	function wait(seconds) {
		let start = new Date()
		console.log('Started waiting on some heavy computation...')
		let begin = performance.now()
		while((new Date() - start) / 1000 < seconds) {}
		const result = performance.now() - begin
		const message = 'finished from worker thread in about: ' + Math.round(result / 1000) + ' seconds' 
		postMessage(message)
	}
}


