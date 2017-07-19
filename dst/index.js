(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("graphql"), require("ajv"), require("ajv/lib/refs/json-schema-draft-04.json"));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "graphql", "ajv", "ajv/lib/refs/json-schema-draft-04.json"], factory);
	else if(typeof exports === 'object')
		exports["langue"] = factory(require("fs"), require("graphql"), require("ajv"), require("ajv/lib/refs/json-schema-draft-04.json"));
	else
		root["langue"] = factory(root["fs"], root["graphql"], root["ajv"], root["ajv/lib/refs/json-schema-draft-04.json"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = __webpack_require__(1);

var fs = _interopRequireWildcard(_fs);

var _graphql = __webpack_require__(2);

var _schema = __webpack_require__(3);

var _schema2 = _interopRequireDefault(_schema);

var _language = __webpack_require__(4);

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ajv = __webpack_require__(5);

var ValidationError = function (_Error) {
    _inherits(ValidationError, _Error);

    function ValidationError(errors) {
        _classCallCheck(this, ValidationError);

        var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, JSON.stringify(errors, null, 2)));

        _this.name = 'ValidationError';
        Object.setPrototypeOf(_this, ValidationError.prototype);
        return _this;
    }

    return ValidationError;
}(Error);

exports.default = function () {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : './langue.json';

    var ajv = Ajv({ allErrors: true });
    ajv.addMetaSchema(__webpack_require__(6));
    var validate = ajv.compile(_language2.default);
    var data = JSON.parse(fs.readFileSync(path, 'utf8'));
    if (!validate(data)) throw new ValidationError(validate.errors);
    var schema = (0, _graphql.buildSchema)(_schema2.default);
    var root = {
        language: function language(args) {
            return [data];
        }
    };
    (0, _graphql.graphql)(schema, 'query { language(name: "test") { name } }', root).then(function (response) {
        console.log(JSON.stringify(response, null, 2));
    });
    return {};
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "# GraphQL Schema for Langue\n#   Note:\n#     - The response against queries should be out-of-the-box data. Do not return unexpected or unuseful values (e.g. null) for the queried fields to avoid requerying as well as possible. Such exception handling should be done inside the responding server.\n\ntype Query {\n  language(\n    name: String,\n    nameShort: String,\n    nameTranscript: String,\n    nameAscii: String,\n    code: String,\n    description: String\n  ): [Language]!\n}\n\ntype Language {\n  name: String!\n  nameShort: String!\n  nameTranscript: String!\n  nameAscii: String!\n  code: String!\n  description: String!\n}\n"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Language",
  "description": "Describes a language registory.",
  "type": "object",
  "properties": {
    "name": {
      "description": "Original full name of the language in the orthography. This could be shown in the conscript font. If any of following 'name*' fields are present, they will override this on their proper occasions. Otherwise, this name is used instead of them.",
      "type": "string"
    },
    "nameShort": {
      "description": "Short version of the original language name. This could be shown in the conscript font. Used when there's no enough space to show the full language name.",
      "type": "string"
    },
    "nameTranscript": {
      "description": "Transcribed name of the language. Used for beginner's readability. (FIXME: Support for various languages and writing systems.)",
      "type": "string"
    },
    "nameAscii": {
      "description": "Name of the language in ascii. Used where no unicode special characters support or no prefered conscript font is present.",
      "type": "string"
    },
    "code": {
      "description": "Identical code assigned to the language. If not present, 'x-<nameAscii>' is used.",
      "type": "string"
    },
    "description": {
      "description": "Short summary about the language. This should be a single line. (FIXME: Support for various languages and writing systems.)",
      "type": "string"
    },
    "lexicons": {
      "description": "Set of all variations (e.g. translation and description language) of lexicon.",
      "type": "array",
      "items": [
        {
          "$schema": "http://json-schema.org/draft-04/schema#",
          "title": "Lexicon",
          "description": "Describes a lexicon (dictionary).",
          "type": "object",
          "properties": {
            "lexemes": {
              "description": "Set of all lexical items.",
              "type": "array",
              "items": [
                {
                  "$schema": "http://json-schema.org/draft-04/schema#",
                  "title": "Lexeme",
                  "description": "Describes a lexical item.",
                  "type": "object",
                  "properties": {
                    "lemma": {
                      "description": "Original form.",
                      "$schema": "http://json-schema.org/draft-04/schema#",
                      "title": "Morph",
                      "type": "object",
                      "properties": {
                        "transcription": {
                          "description": "Transcription in the specific rule.",
                          "type": "string"
                        },
                        "graph": {
                          "description": "Form described in graphemes.",
                          "type": "string"
                        },
                        "phone": {
                          "description": "Pronunciation described in phonemes.",
                          "type": "string"
                        }
                      },
                      "additionalProperties": false,
                      "required": [
                        "transcription"
                      ]
                    },
                    "translations": {
                      "description": "All possible translations for the lemma.",
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "tags": {
                      "description": "Tags related to the lexeme.",
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "descriptions": {
                      "description": "Detailed descriptions about the lexeme; such as collocations and nuance.",
                      "type": "array",
                      "items": [
                        {
                          "$schema": "http://json-schema.org/draft-04/schema#",
                          "title": "Description",
                          "description": "Describes a detailed description for an item.",
                          "type": "object",
                          "properties": {
                            "content": {
                              "description": "Content of the description.",
                              "type": "string"
                            },
                            "title": {
                              "description": "Title of the description.",
                              "type": "string"
                            }
                          },
                          "additionalProperties": false,
                          "required": [
                            "content"
                          ]
                        }
                      ]
                    },
                    "variations": {
                      "description": "All possible variations related to the lexeme.",
                      "type": "array",
                      "items": [
                        {
                          "$schema": "http://json-schema.org/draft-04/schema#",
                          "title": "Form",
                          "description": "Describes a form related to a specific tag.",
                          "type": "object",
                          "properties": {
                            "morph": {
                              "description": "Special form related to the tag.",
                              "$schema": "http://json-schema.org/draft-04/schema#",
                              "title": "Morph",
                              "type": "object",
                              "properties": {
                                "transcription": {
                                  "description": "Transcription in the specific rule.",
                                  "type": "string"
                                },
                                "graph": {
                                  "description": "Form described in graphemes.",
                                  "type": "string"
                                },
                                "phone": {
                                  "description": "Pronunciation described in phonemes.",
                                  "type": "string"
                                }
                              },
                              "additionalProperties": false,
                              "required": [
                                "transcription"
                              ]
                            },
                            "tag": {
                              "description": "Tags such as antonym and synonym.",
                              "type": "string"
                            }
                          },
                          "additionalProperties": false,
                          "required": [
                            "morph",
                            "tag"
                          ]
                        }
                      ]
                    },
                    "relations": {
                      "description": "Related lexemes.",
                      "type": "array",
                      "items": [
                        {
                          "$schema": "http://json-schema.org/draft-04/schema#",
                          "title": "Form",
                          "description": "Describes a form related to a specific tag.",
                          "type": "object",
                          "properties": {
                            "morph": {
                              "description": "Special form related to the tag.",
                              "$schema": "http://json-schema.org/draft-04/schema#",
                              "title": "Morph",
                              "type": "object",
                              "properties": {
                                "transcription": {
                                  "description": "Transcription in the specific rule.",
                                  "type": "string"
                                },
                                "graph": {
                                  "description": "Form described in graphemes.",
                                  "type": "string"
                                },
                                "phone": {
                                  "description": "Pronunciation described in phonemes.",
                                  "type": "string"
                                }
                              },
                              "additionalProperties": false,
                              "required": [
                                "transcription"
                              ]
                            },
                            "tag": {
                              "description": "Tags such as antonym and synonym.",
                              "type": "string"
                            }
                          },
                          "additionalProperties": false,
                          "required": [
                            "morph",
                            "tag"
                          ]
                        }
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "lemma",
                    "translations"
                  ]
                }
              ]
            },
            "tags": {
              "description": "Tags related to the lexicon.",
              "type": "array",
              "items": [
                {
                  "type": "string"
                }
              ]
            }
          },
          "additionalProperties": false,
          "required": [
            "lexemes"
          ]
        }
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "description"
  ]
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("ajv/lib/refs/json-schema-draft-04.json");

/***/ })
/******/ ]);
});