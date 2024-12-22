const myarr = ['rahul',' - ','jignesh',' - ','satyam']
const res = myarr.reduce((a,c)=> a+c, 'group 1 - ' )
console.log( res)

const newArr = [...res]
const mapArr =  newArr.map((x)=> x+' is ')
console.log(mapArr)

const filterArr = mapArr.filter((x)=> x.includes('r'))
const filterRes = console.log(filterArr)