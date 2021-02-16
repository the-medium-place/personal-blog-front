import React from 'react'

export default function Dashboard({ postsState, setPostsState }) {
    return (
        <div className="Dashboard">
            <h1>Here's the dashboard!!</h1>

            {postsState.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <img src={post.image1url} />
            <img src={post.image2url} />
            <img src={post.image3url} />
            <ul>Tags:
            {post.Tags.map(tag => {
              return (
                <li key={tag.id}>
                  {tag.text}
                </li>
              )
            })}
            </ul>
            <ul>Comments:
              {post.Comments.map(comment => {
                return (
                  <li key={comment.id}>
                    {`${comment.name} says: ${comment.text}`}
                  </li>
                )
              })}

            </ul>

            <br />
          </div>
        )
      })}
        </div>
    )
}
