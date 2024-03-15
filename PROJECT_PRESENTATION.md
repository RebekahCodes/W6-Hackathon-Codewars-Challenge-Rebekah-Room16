🎫 Ticket 1 - Setup: 
- Install Vitest ✅
- Set up an NPM test script that conveniently runs your tests. ✅


🎫 Ticket 2 - Plan your kata:
- Brainstorm kata ideas ✅
- Narrow down the details of the kata ✅
- Write Kata scenario ✅

The idea is to creat a function that would help retial merchandisers to allocate stock to different sized stores. They will need to split the units of stock delivered between their stores, but each of their stores are different sizes and need different amounts of stock. The larger stores also have a minimum number of units that should be allocated to them before the merchandiser can allotate any uits to smaller stores with lower priority rankings.



🎫 Ticket 3 - Write your kata
- Come up wth test cases (3 MVP, 5 MVP2, 10 MVP3) ✅
- Define expected outcomes ✅

100 units => [50,30,20] 
20 units => [10,6,4] 
8 units => [8,0,0] 
194 units => [97,58,39]
4738 units => [2369,1421,948]

For each outcome:
-Write a failing test
-Make the test pass
-Refactor

Test 1: 100 units => [50,30,20] 
-Write a failing test ✅
-Make the test pass ✅
-Refactor ✅

20 units => [10,6,4] 
-Write a failing test ✅
-Make the test pass ✅
-Refactor ✅


8 units => [8,0,0] 
-Write a failing test ✅
-Make the test pass ✅
-Refactor ✅

194 units => [97,58,39]
-Write a failing test ✅
-Make the test pass ✅
-Refactor ✅

Edge cases
11 units => [10,1,0]
-Write a failing test ✅
-Make the test pass ✅
-Refactor ✅

*Arrange, Act, Assert
