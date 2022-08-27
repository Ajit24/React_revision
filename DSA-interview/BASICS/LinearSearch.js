class Search {
    constructor(input) {
      this.input = input
    }
  
    linearSearch(target) {
      const array = this.input
  
      const len = array.length
  
      for (let i = 0; i < len; i++) {
        if (array[i] === target) {
          return 'Element present in index ' + i
        }
      }
  
      return 'Element not found'
    }
  }
  
  var search = new Search([1, 2, 3, 4, 5, 6])
  console.log(search.linearSearch(3)) // Element present in index 2
  search.linearSearch(30) // Element not found