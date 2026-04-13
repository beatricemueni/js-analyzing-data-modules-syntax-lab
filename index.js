function combineUsers(...args) {

  const combinedObject = {
    users: []
  };

  for (const arr of args) {
    if (Array.isArray(arr)) {
      combinedObject.users = [...combinedObject.users, ...arr];
    }
  }


  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}


// Example test
const result = combineUsers(
  ['Alice', 'John'],
  ['Charlie', 'Sophie'],
  ['David', 'Eve']
);

console.log(result);



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};