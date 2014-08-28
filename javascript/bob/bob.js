function Message( message ){
  this.message = message;
  return this;
}

Message.prototype.yells = function(){
  return ( /(?=.*[A-Z\xdc])^[^a-z\xfc]*$/ ).test( this.message );
};

Message.prototype.asks = function(){
  return this.message.slice( -1 ) === '?';
};

Message.prototype.silent = function(){
  return this.message.trim() === "";
};

function Bob(){
  return this;
}

Bob.prototype.respond = function(){
  if      ( this.message.yells()  ) { return 'Woah, chill out!';   }
  else if ( this.message.asks()   ) { return 'Sure.';              }
  else if ( this.message.silent() ) { return 'Fine. Be that way!'; }
  else                              { return 'Whatever.';          }
};

Bob.prototype.hey = function( message ){
  this.message = new Message( message );
  return this.respond();
};

module.exports = Bob
