import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const Question = ({ content }: Props) => {
  return (
    <div className="mx-auto text-lg font-bold mt-5 mb-3">
        <div className="flex flex-row">
            <div className="basis-1/6">שאלה:</div>
            <div className="basis-5/6">{content.replace('שאלה:', '')}</div>
        </div>
    </div>
  )
}

export default Question
