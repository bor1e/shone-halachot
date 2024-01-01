import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import PostFooter from '../../components/post-footer'
import Layout from '../../components/layout'
import { getPostByNumber } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import SectionSeparator from '../../components/section-separator'
import NavigateHalacha from '../../components/navigate-halacha'
import Link from 'next/link'
import DisqusComments from '../../components/disquscomments'
/* import { FootnotesProvider,
  FootnoteRef as Ref,
  Footnotes } from 'react-a11y-footnotes' */

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${post.title.name} | שו"ת הלכה למעשה עפ"י מנהגי חב"ד`
  if (!router.isFallback && !post?.number) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title.original.replace('*', '') + " - " + post.number}
              // coverImage={post.coverImage}
              // date={post.date}
              // author={post.author}
              />
              <PostBody content={post.body} />
              <div className="flex flex-row justify-around p-4">
                <button
                  className=" bg-black hover:bg-white hover:text-black border border-black text-white font-bold px-4 py-2 rounded-full w-32"

                >

                  <Link
                    href={{
                      pathname: `/halachot/${Number(post.number) - 1}`,
                    }}
                  >
                    קודם
                  </Link>
                </button>

                <button
                  className=" bg-black hover:bg-white hover:text-black border border-black text-white font-bold px-4 py-2 rounded-full w-16"
                >
                  <Link
                    href={{
                      pathname: `/halachot/${Number(post.number) + 1}`,
                    }}
                  >
                    הבא
                  </Link>

                </button>
              </div>
              <SectionSeparator />
              <PostFooter sources={post.sources} />
              {/* <SectionSeparator /> */}
              {/* <DisqusComments p/ost={post} /> */}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    number: number
  }
}


export async function getStaticProps({ params }: Params) {
  const post = getPostByNumber(params.number + '')

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths({ slug: string }) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}