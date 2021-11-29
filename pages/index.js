import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Here I share everything I do. Tutorials, code and more.</p>
      </section>
      <section className="mx-auto w-10/12 space-y-4">
        {posts.map(({ slug, date, title, tags, lang }) => (
          <div key={slug} className="border rounded p-4">
            <Link href={`/${slug}`}>
              <a className="text-xl font-bold">{title}</a>
            </Link>
            <br />
            <small className="text-sm text-gray-600">
              <Date dateString={date} />
            </small>
            {tags?.map(tag => (
              <span
                key={tag}
                className="uppercase inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {tag}
              </span>
            ))}
            <span className="uppercase">{lang}</span>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  console.log(">>> all posts", posts)
  return {
    props: {
      posts
    }
  }
}
