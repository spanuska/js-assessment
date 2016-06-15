exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(this, obj);
  },

  functionFunction: function(str) {
    return function(otherstr){
      return str + ', ' + otherstr;
    };
  },

  makeClosures: function(arr, fn) {
    var resultsArr = [];
    
    function useTheClosure(i) {
      return resultsArr.push(function(){
        return fn(arr[i]);
      });
    }

    for (var i = 0; i < arr.length; i++) {
      useTheClosure(i);
    }

    return resultsArr;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
