import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getAllPosts} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home({posts}) {
  return (<Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className="bg-gray-50">
      <div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2
          className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span
            className="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>


    <div
      className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div
        className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2
            className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recent
            publications</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet.
            Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div
          className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map(({slug, date, title, tags, lang, summary}) => (
            <div key={slug}>
              <div>
                <a href={slug} className="inline-block">
                    <span
                      className={classNames("bg-pink-100 text-pink-800", 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium')}
                    >
                      {tags}
                    </span>
                </a>
              </div>
              <Link href={slug}>
                <a className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900">{title}</p>
                  <p className="mt-3 text-base text-gray-500">{summary}</p>
                </a>
              </Link>
              <div className="mt-6 flex items-center">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <Date dateString={date}/>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </div>
  </Layout>)
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
