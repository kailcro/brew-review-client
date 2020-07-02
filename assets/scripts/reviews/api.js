'use strict'
const config = require('./../config')
const store = require('./../store')

const createReview = function (data, beerId) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      review: {
        title: data.review.title,
        content: data.review.content,
        rating: data.review.rating,
        beerId: beerId
      }
    }
  })
}

// const indexReview = function () {
// fix the back end (server side) use of token/user id
// use createReview backend review for reference
// Note: I think you need to fix it because you need userId
// .. but maybe not? if {{reviews._id}} lives in the handlebar then maybe not
// ..... regardless -> try passing userId thorugh server side first

// after that, figure out how to pass corrent data in
// as of right now the goal is to append this index html to ...
// ... the last div section of the index-handlebars (maybe think about seperating) ...
// .. but give it a try this way first
// }
module.exports = {
  createReview
}
