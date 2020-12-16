const myPromise = new Promise((resolve,reject) => {
	if (true) {
		setTimeout( () => {
			resolve('I have succeeded');
		}, 1000);
	} else {
		reject('I have failed')
	}

});

myPromise
	.then(resolveValue => resolveValue+'!!!')
	.then(resolveValue1 => console.log(resolveValue1)
	.catch(rejectValue => console.log(rejectValue));
