import React from 'react'
import { useFeed } from './util/hooks'

const Feed = () => {
  const { feed } = useFeed()

  return feed ? (
    <>
      <ul>
        {feed.map((item, i) => (
          <li key={i}>
            <p>
              {item.text}
              {item.author.username}
            </p>
          </li>
        ))}
      </ul>
    </>
  ) : null
}

export default Feed
