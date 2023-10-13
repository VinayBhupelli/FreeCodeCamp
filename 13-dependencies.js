const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items) // has the property to flatten the nested array
console.log(newItems)
console.log("You have completed 2 hours in the course")