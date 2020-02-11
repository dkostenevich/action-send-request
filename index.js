const core = require('@actions/core');
const request = require('./request');

// most @actions toolkit packages have async methods
async function run() {
  const url = core.getInput('url');
  const method = core.getInput('method');
  const avoid_error = core.getInput('avoid_error');
  const payload = core.getInput('payload');
  const headers = core.getInput('headers');

  try { 
    const result = await request(url, method, payload, headers);
    core.setOutput('output', JSON.stringify(result.body));
  } 
  catch (error) {
    if (avoid_error) {
      core.warning('Warning: ', error.message);
      return;
    }

    core.setFailed(error.message);
  }
}

run()
