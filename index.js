function wait(seconds) {
  let start = new Date()
	console.log('Started waiting on some heavy computation...')
	let begin = performance.now()
  while((new Date() - start) / 1000 < seconds) {}
	const result = performance.now() - begin
	console.log('finished in about: ' + Math.round(result / 1000) + ' seconds')
}

const handleClick = () => {
	wait(5)
}
const increaseValue = () => {
	let value = document.getElementById('value').innerHTML
	parseInt(value)
	value++
	console.log('value of the number was increased to ' + value)
	document.getElementById('value').innerHTML = value
}

const pauseWithWebWorker = () => {
	const myWorker = new Worker('worker.js')
  myWorker.postMessage(5)
}

const counter = () => {
	let seconds = parseInt(document.getElementById('container').innerHTML)
	++seconds
	document.getElementById('container').innerHTML = seconds
}

const cancel = setInterval(counter, 1000);
