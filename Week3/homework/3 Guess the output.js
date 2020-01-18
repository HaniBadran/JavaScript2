// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// The result is 12, not 10 because the alert takes the value of a from inside the function block.