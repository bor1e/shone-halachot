import React from 'react';
import Source from '../interfaces/source';
import Answer from './answer'
import HoverLink from './hoverlink';
import markdownStyles from './markdown-styles.module.css'
import Question from './question'
import reactStringReplace from 'react-string-replace';
import ReactDOMServer from 'react-dom/server';

type Props = {
  content: string[],
  sources: Source[]
}

const PostBody = ({ content, sources }: Props) => {
  const renderContent = (entry) => {
    if (entry.includes('שאלה:')) {
      return <Question content={entry} />;
    } else {
      const formattedText = formatBoldText(todo(entry, sources));
      // const formattedText = todo(entry, sources);
      return <p className="my-3">{formattedText}</p>;
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      {content.map(renderContent)}
    </div>
  );
}

export default PostBody


function todo(x, sources) {
  return reactStringReplace(x, /([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (match, i) => {
    let id = magic(match);
    let text = sources.filter(source => source.number == match)[0].content;
    return <HoverLink id={id} footnote={text} />
  }
  )
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
let flag = true;

export const formatBoldText = (textArray) => {
  const boldRegex = /\*(.*?)\*/g;

  if (flag) {
    console.log(textArray);
    flag = false;
  }
  return textArray.map((text, arrayIndex) => {
    console.log(text);
    if (React.isValidElement(text)) {
      return text;
    }
    let parts = text.split(boldRegex);
    for (let i = 1; i < parts.length; i += 2) {
      parts[i] = <strong key={`${arrayIndex}-${i}`}>{parts[i]}</strong>;
    }
    return parts;
  });
};

function magic(text) {
  let numbers = '';
  for (let i = 0; i < text.length; i++) {
    numbers += digitFromSuperscript(text[i]) + "";
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
  if (result > -1) { return result; }
  else { return superChar; }
}