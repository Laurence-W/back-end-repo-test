var { app, PORT, HOST } = require("./server");

app.listen(PORT, HOST, () => {
  console.log(`
    Server running. Come run with us!
    `);
});
