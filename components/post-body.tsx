import Answer from './answer'
import markdownStyles from './markdown-styles.module.css'
import Question from './question'
import reactStringReplace from 'react-string-replace';

type Props = {
  content: string[]
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {content.map((entry) => entry.includes('שאלה:')? <Question content={entry} /> : /*entry.includes('תשובה') ? <Answer content={entry} />  :*/ 
      <p className="my-3">
         {todo(entry)}
        </p>
      )}
    </div>
  )
}

export default PostBody


function todo(x) {
  return reactStringReplace(x, /([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (match, i) => (
    <a id={`ref-${magic(match)}`} className= "text-amber-500" href={`#references-${magic(match)}`} key={`${i}`} aria-describedby="footnotes-label" role="doc-noteref">{match}</a>
  ))
}
/*
function todo2(x) {
  return reactStringReplace(x, /: '(.*?)'/g, (match, i) => (
    <span className= "text-stone-400" key="i">: '{match}'</span>
  ))
}
function todo3(x) {
  return reactStringReplace(x, /\*(.*?)\* /g, (match, i) => (
  <u>{match}</u>
  ))
}
*/
function magic(text) {
  let numbers = '';
  for (let i = 0; i < text.length; i++) {
    numbers += digitFromSuperscript(text[i])+"";
  }
  // console.log(text, numbers);
  return numbers
}
/*

<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>05</div>
  <div class="grid grid-cols-subgrid gap-4 col-span-3">
    <div class="col-start-2">06</div>
  </div>
</div>


<div class="flex flex-row">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
*/

function digitFromSuperscript(superChar) {
  var result = "⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(superChar);
  if(result > -1) { return result; }
  else { return superChar; }
}