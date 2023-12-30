import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 w-1/3">
          הצטרף          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center  lg:w-1/2">
            <a
              href="https://docs.google.com/document/d/1d0eTNj46L_0jh_xdNbgvzocMiEHwZPWFJm6OB8m1x8k/edit"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
קישור לקובץ דרייב של כל ההלכות
            </a>
            <a
              href="https://chat.whatsapp.com/HSFw14kcxch7wDr7Ysh4cP"
              className="mx-3 font-bold hover:underline"
            >
              קישור לקבוצה (שקטה)
            </a>
            <a
              href="https://www.matara.pro/nedarimplus/online/?S=gUSa"
              className="mx-3 font-bold hover:underline"
            >
              קישור להקדשות לזכות/לע"נ
              </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
