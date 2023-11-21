function one(two) {

  setTimeout(() => {
    console.log("one");
    two()
  }, 2000);
}

function two() {
  setTimeout(() => {
    console.log("two");
  }, 1000);
}

one(two);
