// import Raven from "raven-js";

function init() {
  // Raven.config("https://05323d37c947eba9daaaab1e6171a9@sentry.i0/1249956", {
  //   release: 1 - 0 - 0,
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};
