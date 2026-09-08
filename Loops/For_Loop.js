/* The for statement creates a loop with 3 optional expressions:
Syntax:
for (expr1; expr2; expr3) {
  // code block to be executed
}
  
exp1 is executed one time before the execution of the code block.
exp2 defines the condition for executing the code block.
exp3 is executed every time the code block has been executed.
*/


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*There are 3 parts.
Start counting from 1.
Keep running while i is less than or equal to 5.
Increase i by 1.

i = 1 → print 1
i = 2 → print 2
i = 3 → print 3
i = 4 → print 4
i = 5 → print 5
i = 6 → stop
*/