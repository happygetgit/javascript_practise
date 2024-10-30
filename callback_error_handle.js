function doTask(callback) {
  console.log("Task started....");
  const errorOccured = Math.random() < 0.5;
  if (errorOccured) {
    callback(new Error("Failed to fetch data"), null);
  } else {
    const data = { id: 1, name: "shalini", role: "developer" };
    callback(null, data);
  }
}

function afterTask(err, data) {
  if (err) {
    console.log("Error:", err.message);
  } else {
    console.log("Data received: ", data);
  }
}

doTask(afterTask);
