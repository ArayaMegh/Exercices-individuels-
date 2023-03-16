//const array = [1,2,3,4,5,6]

// function sum1(tab){
//    let recup=0
//    for(let i=0; i<tab.length;i++){
//        recup += tab[i]
//    }
//    return recup
// }

//console.log(sum1(array))

// const array = [1,2,3,4,5,6]

// function sum2(tab){
//     if (tab.length===0) {
//         return 0
//     }
//         let elem = tab.shift()
//             return elem + sum2(tab)   
// }
// console.log(sum2(array))


// function factoriel(entier){
//     if (entier === 0) {
//         return 1
//     } 
//         let elem = entier - 1 
//             return entier * factoriel(elem)
// }
// console.log(factoriel(5))


// function fibo(x){
//     const tab = [0,1]
//     let suite = []
//     let boucle = 3
//     if (x <= 2) {
//         for (let i =0; i < x; i++) {
//             suite.push(tab[i])
//         }
//         return suite
//     }
//     suite = tab
//     while (boucle <= x){
//         let last = suite[suite.length-1]
//         let a = suite[suite.length-2]
//         let b = last + a 
//         suite.push(b)
//         boucle++
//     }
//     return suite
// }
// console.log(fibo(20))

// function fibonacci(x, tab = [0, 1]) {
//     let suite = []
//     let detect = false
//     if (x < 3 && (detect === false)) {
//         for (let i = 0; i < x; i++) {
//             suite.push(tab[i])
//             return suite
//         }
//     }
//     suite = tab
//     detect = true
//     let newElem = suite[suite.length - 1] + suite[suite.length - 2]
//     suite.push(newElem)
//     fibonacci(x - 1, suite)
//     return suite
//     }
//     console.log(fibonacci(10))


// function fibonacci(x) {
// 	if (x == 0 || x == 1) {
//     	return x
//     } else {
//     	return fibonacci(x - 1) + fibonacci(x - 2)
//     }
// }
// console.log(fibonacci(10))

// function fibonacci(x) {
// 	if (x == 0 || x == 1) {
//     	return x
//     } else {
//     	return fibonacci(x - 1) + fibonacci(x - 2)
//     }
// }

// function fibonacci_suite(x) {
// 	var suite = []
// 	for (let i = 0 ; i < x ; i++) {
//     	suite.push(fibonacci(i))
// 	}
//     return suite
// }

// console.log(fibonacci_suite(5))

function fibonacci(x) {
	if (x == 0) {
    	return [0]
    } else if (x == 1) {
    	return [0, 1]
    } else {
		let suite = fibonacci(x - 1)
		suite.push(suite[x - 1] + suite[x - 2])
		return suite
    }
}
console.log(fibonacci(5))