import Link  from "next/link";

type Props = {
    number: string
  }
  
const NavigateHalacha = ({ number }: Props) =>  {
    // Assuming you have logic to get the previous and next post URLs
    const previousPostUrl = "/previous-post";
    const nextPostUrl = "/next-post";
  
    return 
        (
            <>
                <Link
                    as={`/posts/${number}`}
                    href="/posts/[slug]"
                    className="hover:underline bg-red"
                    >TODO</Link>
            </>
    );
  };
  
  export default NavigateHalacha;