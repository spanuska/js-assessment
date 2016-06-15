exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    setTimeout(function(){
      for (var i = start; i < end; i++) {
        return i;
      }
    }, 100);
  },

  cancel: function () {
    
  }
};
