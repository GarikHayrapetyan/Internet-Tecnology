const fs = require('fs');

fs.watchFile("./7a.js", (curr, prev) => { 
    console.log("\nThe File was modified"); 
    console.log("Previous Modification Time", prev.mtime); 
    console.log("Current Modification Time", curr.mtime); 
  });

 console.log("Hello");
