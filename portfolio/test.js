// const a = [0,1,2,3]

// console.log(a)

// const myString = a.toString().replace(/\D/g,'')

// console.log(myString)

function solve(){
  const a = [0,1,2,3]
  const myString = a.toString().replace(/[\D]/g,'').split(/(\d)/)
  console.log(myString)


}


solve()
