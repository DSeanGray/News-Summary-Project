const guardian = require('guardian-js');

let api = new guardian(apiKey, false);

api.content.search('football', {
  tag: 'sports'
});
