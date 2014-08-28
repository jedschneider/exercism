class Message
  constructor: (@message)->

  yells: ->
    ///
      (?=.*[A-Z]) # positive look ahead assures there are caps and no digits
      ^[^a-z]*$   # veifies no false positives for mixed case situations
    ///
    .test(@message)

  asks: ->
    return false if @yells()
    @message.slice(-1) == '?'

  silent: -> @message.trim() == ""


class Bob

  hey: (message)->
    message = new Message(message)
    switch
      when message.silent() then 'Fine. Be that way!'
      when message.asks() then 'Sure.'
      when message.yells() then 'Woah, chill out!'
      else 'Whatever.'


module.exports = Bob
