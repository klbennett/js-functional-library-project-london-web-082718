fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


// Iterates over a collection of elements, passing each element in turn to a callback function.
// Each invocation of callback is called with three arguments: (element, index, collection).
// If collection is a JavaScript object, callback's arguments will be
// (value, key, collection). Returns the original collection for chaining.

    each: function(collection, callback) {
      console.log(callback)
      for (const val in collection ) {
        callback(collection[val]);
      }
      return collection;
    },

    map: function(collection, callback) {
      // console.log(callback)
      let map1 = [];
      for (const val in collection) {
        map1.push(callback(collection[val]));
      }
      return map1
    },

    reduce: function(collection, callback, init) {

      let acc;
      if (init !== undefined) {
        acc = init;
      } else {
        acc = 0
      }
      for (const item of collection){
        acc = callback(acc, item)
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const item in collection) {
        if (predicate(collection[item])) {

          return collection[item];
        }
      }
    },

    filter: function(collection, predicate) {
      let selected = [];
      for (const item in collection) {
        if (predicate(collection[item])) {
          selected.push(collection[item]);
          }
        }
      return selected;
    },

    size: function(collection) {
      let array = collection.length ? collection : Object.keys(collection)
      return array.length
    },


    first: function(collection, n) {
      if (n) {
        return collection.slice(0,n)
      }
      else
        return collection[0];
      },

      last: function(collection, n) {
        // debugger
        if (n) {
          return collection.slice(collection.length-n)
        }
        else
          return collection[collection.length-1];
        },


    compact: function(collection) {

      let arr = [false, NaN, undefined, 0, "", null]
      return collection.filter( item => !arr.includes(item))
    }

    sortBy: function(collection, callback) {
      const arr = [...collection]
      return arr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

  }

})()

fi.libraryMethod()
