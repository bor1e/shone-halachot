import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const Answer = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto my-2">
        <div className="flex flex-row">
            <div className="basis-1/6">תשובה:</div>
            <div className="basis-5/6">{content.replace('תשובה:', '')}</div>
        </div>
    </div>
  )
}

export default Answer
