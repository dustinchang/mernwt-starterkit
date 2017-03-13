//Increment
function increment_num(index: any) {
  return {type: 'INCREMENT_NUM', index}
}

// Add Comment
function decrement_num(index: any) {
  return {type: 'DECREMENT_NUM', index}
}


// increment
export function increment(index: any) {
  return { //An Action is just an object with some info of:
    type: 'INCREMENT_LIKES', // What happened
    index // And what needs to change
  }
}

// add comment
export function addComment(postId: any, author: any, comment: any) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId: any, i: any) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
