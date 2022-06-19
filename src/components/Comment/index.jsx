import React from 'react'
import { formatData } from '../../store/getDate'

// commentedBy: "61939f52b2686012c09a81aa"
// dateCreated: "2021-11-29T10:20:27.140Z"
// followedCommentID: "618a3b90b2686012c09a216a"
// likes: ['61781580b2686012c098ecad']
// postID: "612cb4af902cf330b086a365"
// text: "Hello"
// __v: 7
// _id: "61a4a96bb2686012c09b1e9d"

export function Comment({comment}) {
  const {commentedBy, text, likes, dateCreated} = comment

  return (
    <li>
      <h3>{commentedBy}</h3>
      <p>{text}</p>
      <p>{likes.lenght}</p>
      <p>{formatData(dateCreated)}</p>
    </li>
  )
}
