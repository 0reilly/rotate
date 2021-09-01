How I thought about this challenge: 

(Hand written notes included in notes.pdf)

First, I drew the same pictures from the prompt and used the same format to draw the squares provided in the example input. 
I also included the before and after arrays under the squares and traces the movement of the indexs. I noticed some symmetry across both the x and y center axis but couldn't figure out a way to implement that into my algorithm. 

I came up with a logical algorithm for the outter rows and considered that it might require a recursive approach to rotate the inner "squares", but after sketching the logic I realized that keeping track of the indexs would be too difficult. 

At some point I realized I could use the row and column indexes to offset the inner rows for shifting both up and down and left and right, which meant my algorithm was mostly complete.

Initially I thought that shifting indexes around in place would complicate later shifts and considered using a HashMap to associate index values with each number. A voice from god told me that I could just use a regular array and then I realized how simple that step would be. 

Most of the time spent on my keyboard was learning the fast-csv library methods and understanding how the stdout stream worked. I had to use some of the formatting options like column quotes for the json column and adding headers to the output. 
At first I wasn't passing the rows to the stream output properly and ended up creating a new array to add to while parsing the input file, and then writing the entire array to output all at once. After rereading the Efficiency scoring, I realized I could write each row as I read it and reduce the space complexity. 

I believe the actual rotate algorithm takes O(n) because the nested for loops are each n^1/2, which is considered very efficient at scale. 

I believe I followed the bullet points for the Scoring Basics, Efficiency, and Maintainability well. 
