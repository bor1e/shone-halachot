import Source from '../interfaces/source'

type Props = {
  sources: Source[]
}

const PostFooter = ({ sources }: Props) => {
  return (
    <div className="max-w-2xl mx-auto text-right">
        <h1 id="footnotes-label" className="text-2xl mb-5">מקורות</h1>
          {sources.map(({number, content}, index) => (
            <p key={index} id={`references-${index++}`}><a href={`#ref-${index}`} aria-label={`back to reference ${index}`}  role="doc-backlink" >{number}</a>: {content}</p>
          ))}
    </div>
  )
}

export default PostFooter

/*

<a
  id="css-counters-ref"
  href="#css-counters-note"
  aria-describedby="footnotes-label"
  role="doc-noteref"
  >CSS counters</a
>

             <a
        href="#css-counters-ref"
        aria-label="Back to reference 1"
        role="doc-backlink"
        >↩</a
      >

*/

// /([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/gmiu)
// $& - matched substring
