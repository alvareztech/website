import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import Head from 'next/head'
import Date from '../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="mx-auto w-10/12">
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log("getStaticPaths:", paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  // console.log("getStaticProps:", postData)
  return {
    props: {
      postData
    }
  }
}
