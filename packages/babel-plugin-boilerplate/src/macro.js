const { createMacro } = require('babel-plugin-macros')
const { getReplacement } = require('./helpers')

module.exports = createMacro(yourNewMacro)

function yourNewMacro({ references, state, babel }) {
  // do something here
}
