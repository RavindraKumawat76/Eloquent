const str = 'ravinnnnnnndra'
const obj = {}
const count = 1
for (let i = 0; i < str.length; i++) {
  if (obj.hasOwnProperty(str[i])) {
    obj[str[i]]++
  } else {
    obj[str[i]] = count
  }
}

const keys = Object.keys(obj)
const values = Object.values(obj)
const maxValue = Math.max(...values)
const index = values.indexOf(maxValue)

console.log(str)
console.log(obj)
console.log(keys)
console.log(values)
console.log(maxValue)
console.log(index)
console.log(keys[index])
