var words, _exists

_exists = function( thing ){
  return typeof thing !== "undefined" && thing !== null
}

words = function( str ){
  var _words, _reducer, _splitter, _sanitize, _count

  // this object doesn't have methods like constructor
  // unlike an obj literal like {}
  _count = Object.create( null )

  // removes extra spaces
  _splitter = new RegExp( "\\s+" )

  // gets rid of punctuation and other tricky characters
  // and lower cases the string
  _sanitize = function( str ){
    var _replacer = new RegExp( "[\\,!\\?\\&¿¡\\%:@\\$\\^\\&]", 'g' )
    return str.replace( _replacer, "" ).toLowerCase()
  }

  // reduces into a single object
  _reducer = function( memo, word ){
    if ( _exists( memo[word] ) )
      { memo[word] += 1 }
    else
      { memo[word] = 1 }
    return memo
  }

  return _sanitize( str ).split( _splitter ).reduce( _reducer, _count )
}

module.exports = words
