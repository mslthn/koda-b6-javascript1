let temp = 32
let tempSource = 'C'
let convertTo = 'F'
let result

if (tempSource === 'C' && convertTo === 'R') {
    result = temp * 4/5
} else if(tempSource === 'C' && convertTo === 'F'){
    result = (temp * 9/5) + 32 
    
} else if (tempSource === 'C' && convertTo === 'K') {
    result = temp + 273.15
} else if (tempSource === 'R' && convertTo === 'C') {
    result = temp * 5/4
} else if (tempSource === 'R' && convertTo === 'F') {
    result = (temp * 9/4) + 32
} else if (tempSource === 'R' && convertTo === 'K') {
    result = (temp * 5/4) + 273
} else if (tempSource === 'F' && convertTo === 'C') {
    result = (temp - 32) * 5/9
} else if (tempSource === 'F' && convertTo === 'R') {
    result = (temp - 32) * 4/9
} else if (tempSource === 'F' && convertTo === 'K') {
    result = (temp - 32) * 5/9 + 273
} else if (tempSource === 'K' && convertTo === 'C') {
    result = temp - 273.15
} else if (tempSource === 'K' && convertTo === 'R') {
    result = 4/5 * (temp-273)
} else if (tempSource === 'K' && convertTo === 'F') {
    result = (temp - 273.15) * 9/5 + 32
}

console.log(result)