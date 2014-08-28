class Words

  MATCHER = /\w+/g

  REDUCER = (memo, word)->
    word = word.toLowerCase()
    if count = memo[word]
      memo[word] = count += 1
    else
      memo[word] = 1
    memo

  constructor: (str)->
    @count = str.match(MATCHER).reduce(REDUCER, {})

module.exports = Words
