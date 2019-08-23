const parseString = require('react-native-xml2js').parseString;

const parserStringToxml = (xml) => {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) reject(err);
      const { rss: { channel } } = result;
      resolve(channel)
    });
  });
};

export {
  parserStringToxml
}