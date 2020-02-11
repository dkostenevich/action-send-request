const core = require('@actions/core');
const request = require('./request');

// most @actions toolkit packages have async methods
async function run() {
  const url = core.getInput('url');
  const method = core.getInput('method');
  const avoid_errors = core.getInput('avoid_errors');
  const payload = core.getInput('payload');
  const headers = core.getInput('headers');

  try { 
    const result = await request(url, method, payload, headers);
    core.setOutput('output', JSON.stringify(result.body));
  } 
  catch (error) {
    if (avoid_errors) {
      core.info(error.message);
      return;
    }

    core.setFailed(error.message);
  }
}

run()
