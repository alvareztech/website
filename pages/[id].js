import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import Head from 'next/head'
import Date from '../components/date'

const editUrl = (slug) =>
  `https://github.com/alvareztech/website/edit/main/data/blog/${slug}.md`;

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1>{postData.title}</h1>
        <div className="text-base text-gray-500 mb-2">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="flex items-start justify-center mt-14 w-full">
          <div className="space-x-2 flex-1 -mt-0.5">
            {postData.tags?.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="ml-4 text-sm text-gray-500 dark:text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300">
            <a
              href={editUrl(postData.id)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Edit on Github'}
            </a>
          </div>
        </div>
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
