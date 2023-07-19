var { app, PORT } = require("./server");

app.listen(PORT, () => {
  console.log(`
    Server running. Come run with us!
    `);
});
