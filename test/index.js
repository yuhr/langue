const Langue = require('../dst');

const l = Langue();
l.query('query { language(name: "test") { name } }');