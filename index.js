const wait = (seconds) => {
  let start = new Date()
	console.log('Started waiting on some heavy computation...')
	let begin = performance.now()
  while((new Date() - start) / 1000 < seconds) {}
	const result = performance.now() - begin
	const message = 'finished from main thread in about: ' + Math.round(result / 1000) + ' seconds. Notice how the UI was seized up?'
	return message
}

const pauseWithoutWebWorker = () => {
	const funcResult = wait(5)
	console.log(funcResult)
	document.getElementById('buttonResult').innerHTML = funcResult
}

const pauseWithWebWorker = () => {
	const myWorker = new Worker('worker.js')
  myWorker.postMessage(5)
	myWorker.onmessage = (event) => {
		console.log(event.data, 'event.data')
		document.getElementById('buttonResult').innerHTML = event.data
	}
	
}
const increaseValue = () => {
	let value = document.getElementById('value').innerHTML
	parseInt(value)
	value++
	console.log('value of the number was increased to ' + value)
	document.getElementById('value').innerHTML = value
}

const counter = () => {
	let seconds = parseInt(document.getElementById('container').innerHTML)
	++seconds
	document.getElementById('container').innerHTML = seconds
}

const cancel = setInterval(counter, 1000)
