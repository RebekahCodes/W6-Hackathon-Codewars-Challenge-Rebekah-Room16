/**
Store merchandising challenge:
You are the merchandise manager for three retail stores:

Store A, is a large flagship store in a very busy location.
Store B, is a medium size store in a fairly busy location.
Store C, is a tiny concession store in a quiet village. 

Every delivery of stock into your warehouse needs to be allocated between these three stores based on their priority weightings below: 

Priority 1: Store A should get 50% of the stock, but a minimum of 10 units. 
Priority 2: Store B should get 30% of the stock, but a minimum of 5 units.
Priority 3: Store C should get 20% of the stock with and has no minimum.

Given the units of stock delivered, return an array of integers which shows the allocation between stores in order [A,B,C]. 
If the total units delivered are not sufficient to meet the ideal % allocation for each store, units should be allocated to higher priority stores until their minimums are met.

You must allocate in priority order and take into account store minimums over percentage splits. All allocations should be rounded to the nearest whole number (you can't split a unit between 2 stores!) 

Examples: 

20 units => [10,6,4] - all minimums are met and store C is allocated any remaining stock
8 units => [8,0,0] - units should be allocated to higher priority stores until their minimums are met.
194 units => [97,58,39] - units are split based on percentage weights rounded to the nearest whole number.
**/

export function allocation (units) {
 //Your code...
}