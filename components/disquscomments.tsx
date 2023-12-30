import {DiscussionEmbed} from "disqus-react"
import PostType from "../interfaces/post"

type Props = {
    post: PostType
  }

const DisqusComments = ({ post } :Props ) => {
  const disqusShortname = "your-disqus-shortname"
  const disqusConfig = {
    url: "http://localhost:3000/halachot/"+post.number,
//    url: "https://shone-halacha.vercel.com/halachot/"+post.number,
    disqus_developer: 1,
    identifier: post.number, // Single post id
    title: post.title.original // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;