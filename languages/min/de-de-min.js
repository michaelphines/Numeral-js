// numeral.js language configuration
// language : german (de-de)
// author : Marco Krage : https://github.com/sinky
(function(){var e={delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"k",million:"m"},ordinal:function(e){return"."},currency:{symbol:"€"}};typeof module!="undefined"&&module.exports&&(module.exports=e);typeof window!="undefined"&&this.numeral&&this.numeral.language&&this.numeral.language("de-de",e)})();