// ! Here we're building out the setTimeout Functions

// //This will execute second in order because of the setTimeout
// const fn1 = () => {
// 	setTimeout(() => {
// 		console.log('fn1');
// 	}, 200);

// 	//Notice that even though this is in the second order, because it is outside of the setTimeout it runs immediately.
// 	console.log('This is nested in fn2 and runs immediately');
// }

// //This will take the longest and will therefore be printed to the console last.
// const fn2 = () => {
// 	setTimeout(() => {
// 		console.log('fn2');
// 	}, 300);
// }

// //This will print first.
// const fn3 = () => {
// 	setTimeout(() => {
// 		console.log('fn3');
// 	}, 30);
// }

// fn1();
// fn2();
// fn3();

// ! We're going to build a promise here.



const fn1 = (milliseconds) => {
	return new Promise((resolve, reject) => {
			if(milliseconds >= 2000){
				reject("Waited too long");
			} else {
				setTimeout(() => {
					resolve(`${milliseconds}ms done!`);
				})
			}, milliseconds)};
}

// You must always have a .then() and a .catch() with asyncronous code.
// When you call a method that returns a promise, you must chain .then() and .catch()

// fn1().then((result) => {
// 		console.log(result);
// }).catch((err) => {
// 	console.log(err);
// })

// ? You can also perform something like this.

fn1(6000)
	.then((data) => {
		console.log(data);
		return new Promise((resolve, reject) => {
			resolve(`kirkby: ${data}`);
		})
	})
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log('caught an error: ', err);
	})
	console.log('End of program');

console.log(fn1());


