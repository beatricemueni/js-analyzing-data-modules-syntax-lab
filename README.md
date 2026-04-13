### Lab: Merge Users
### Lab: Analyzing Data with Modules and Syntax (JS)

**Overview**

**Scenario:** You are working for a social media company that has just merged with another. You are tasked with creating a function that takes an undetermined amount of arrays of username and merges them into one larger array to keep track of all the users on your merged website. You will also want to create a date of merging and return that combined with the merged array as an object
**Scenario:** You are working for a social media company that has just merged with another. You are tasked with creating a function that takes an undetermined number of arrays of usernames and merges them into one larger array to keep track of all the users on your merged website. You will also want to create a date of merging and return that, combined with the merged array, as an object.


**Estimated Completion Time:** 30-60 minutes
@@ -23,24 +23,24 @@

2. **Create a combineUsers function:**
   - Create a function named `combineUsers` and assign the following arguments:
     - `...args` (a rest argument) Containing an indeterminite amount of arrays
       - `args` will take the form of an array of array
       - Each internal array are arrays of usernames (strings)
     - `...args` (a rest argument) Containing an indeterminate number of arrays
       - `args` will take the form of an array of arrays
       - Each internal array contains usernames (strings)

3. **Initialize return object**
   - Inside `combineUsers` define the variable `combinedObject` (object).
   - Inside `combineUsers`, define the variable `combinedObject` (object).
     - Initialize with a key of `users` with the value `[]`

4. **Loop through args**
   - Loop through args to isolate each array

5. **Merge arrays**
   - Using a spread operator merge arrays together into the `users` attribute of `combinedObject`
   - Using a spread operator, merge arrays into the `users` attribute of `combinedObject`

6. **Get todays date**
   - Add an attribute to `combinedObject` called `merge_date` and using datejs give it the current date
     - In datejs give it the format of `M/d/yyyy`
     - Don't forget to npm install and to add `require('datejs')` outside of `combineUsers` (datejs is already in package.json)
   - Add an attribute to `combinedObject` called `merge_date` and, using datejs, give it the current date
     - In datejs, give it the format of `M/d/yyyy`
     - *Don't forget to `npm install` and to add `require('datejs')` outside of `combineUsers` (datejs is already in package.json)*

7. **Return object**
   - return `combinedObject`





