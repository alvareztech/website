import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Here I share everything I do. Tutorials, code and more.</p>
      </section>
      <section className="mx-auto w-10/12 space-y-4">
        {allPostsData.map(({ id, date, title }) => (
          <div key={id} className="border rounded p-4">
            <Link href={`/${id}`}>
              <a className="text-xl font-bold">{title}</a>
            </Link>
            <br />
            <small className="text-sm text-gray-600">
              <Date dateString={date} />
            </small>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
