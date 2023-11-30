

import assert from 'node:assert'
import  * as index from '../index.js'


//describe("Subtract Method with inputs",function(){


it("75 & 25 should return 50",function(){

    const result = index.subtract(75,25);

   assert.equal(result,50)

 })

it("23 , 34 should return -12",function(){

    const result = index.subtract(23,34);

   assert.equal(result,5)


})

//})


