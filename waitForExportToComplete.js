const fs = require('fs');

function polling(path, accessType, resolve, reject) {
  const maxWait = 10000; // 10 seconds maximum polling
  const checkInterval = 10; // Check at every 10ms
  let elapse = 0;
  const interval = setInterval(() => {
    fs.access(path, accessType, (err) => {
      if (!err) return resolve(); // Yes!  The file exist!
      if (elapse > maxWait) {
        // Ok I give up!
        clearInterval(interval);
        return reject(new Error(`Maximum polling timeout (${maxWait}ms) reached`));
      }
      elapse += checkInterval;
    });
  }, checkInterval);
}

function waitFor(path, accessType) {
  return new Promise((resolve, reject) => {
    fs.access(path, accessType, (err) => {
      if (!err) return resolve();
      // Ok, still not ok, we will poll
      return polling(path, accessType, resolve, reject);
    });
  });
}

async function waitForExportToComplete(path, edge) {
  try {
    await waitFor(path, fs.constants.F_OK);
    await waitFor(path + 'direction', fs.constants.W_OK);
    await waitFor(path + 'active_low', fs.constants.W_OK);
    await waitFor(path + 'value', fs.constants.W_OK);
    if (edge) {
      await waitFor(path + 'edge', fs.constants.W_OK);
    }
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = waitForExportToComplete;
