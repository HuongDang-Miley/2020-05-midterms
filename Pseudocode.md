# capitalized first character in each sentence
1. declare an expressed function
2. create an empty string, where I will store final result. Name it 'result'. 
3. create a loop to loop through each character in the paragraph
4. Condition: 
   1. if the current index of character is equal 0 (which is the first letter of the paragraph) or the 2 index before the current character is a dot '.' (which mean current character is right after a dot and a space) I'll capitalize that character. store that character in the string 'result'
   2. if the current index is not qualified the condition above, I'll lowercase those character, and also store them in the 'result'
5. return the string 'result'

# Return true when a given password is less than 12 characters and has no space in it.
1. declare an expressed function
2. Declare a condition: If the given string has length less than 12 character or it includes a space. return false
3. If given string is not qualified the above condition, return true.
   

#  Make Half Square
1. declare an expressed function
2. create an empty array, where I will store final result. Name it 'result'. 
3. Make a loop to run through each number in the array. Each time we run, we multiple by that number and divide by 2
4. store the result in the empty array I created at the beginning and return that array
   
# Count As (return number of number that is greater than 90)
1. declare an expressed function
2. create a variable to hold the number of number greater than 90. Set it equal 0 at the beginning. Name it 'count'
3. Make a loop to run through each number in the array. If the number is greater than or equal to 90. I add 1 to 'count'

# Delete the middle letter
1. declare an expressed function
2. create an empty string, where I will store final result. Name it 'result'.
3. condition:
   1. If the string has even length: Loop through each character in the string. If the current character has index not equal to the string length / 2 and string length / 2 -1 (2 middles letters). I add that character to the result string
   2. if the string has odd length;
    Loop through each character in the string. If the current character has index not equal to the string length / 2 that round down (middle character). I add that character to the result string
4. Return the result

# Find the last index of ' ' in the string. If string has no ' '. Return -1.

1. Declare an expressed function
2. If the string include ' '. Loop through the string backwardly. Once Find the first ' '. Return turn the index of that ' ' and break the loop.
3. If string does not include ' '. return -1

# Replace the last ' ' in the string and replace it with '-'.

1. Declare an expressed function
2. Create an empty string to hold the final result. Name it 'result'.
3. Create a variable to hold the value on the last ' '. Set it to 0 because I don't know it's value yet, I just know it's a number. Name it 'indexOfLastSpace'
4. Find the last index of ' ' by Loop through the string backwardly
   If the current character is ' '. I store the index of that ' ' to 'indexOfLastSpace'. Also the stop the loop once I find it.
5. Print the result and replace last ' ' with '-' by looping through the string one more time, normally.
   If the current index is equal the value I store in 'indexOfLastSpace'. I add '-' to the result string. Otherwise, add current character to the string
6. Return result string
   
   
