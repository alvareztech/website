import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'ALVAREZ.tech'
export const siteTitle = 'Here I share everything I do. Tutorials, code and more.'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tutorials, videos, software development." />
        <meta property="og:image" content="" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <div class="container w-full max-w-7xl">
          <div class="flex flex-col max-w-screen-xl p-5 mx-auto md: items-center md: justify-between md:flex-row md:px-6 lg:px-8">
            <div class="flex flex-row items-center justify-between lg:justify-start">
              <Link href="/">
                <a className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                  @alvarez_tech
                </a>
              </Link>
            </div>
            <nav class="flex-col items-center flex-grow hidden pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
              <Link href="tutorials">
                <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                  Tutorials
                </a>
              </Link>
              <Link href="about">
                <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                  About
                </a>
              </Link>
              <Link href="contact">
                <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                  Contact
                </a>
              </Link>
              <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
                <button class="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Follow me
                </button>
              </div>
            </nav >
          </div >
        </div >
      </header>
      <main>
        {children}
      </main>
      <footer class="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="text-white xl:col-span-1">
              <a href="/" class="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                alvareztech
              </a>
              <p class="w-1/2 mt-2 text-sm text-gray-500">By Daniel Alvarez</p>
            </div>
            <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase"> Navigation </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <a href="/pricing" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Pricing </a>
                    </li>
                    <li>
                      <a href="./templates.html" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> All Templates </a>
                    </li>
                    <li>
                      <a href="./documentation.html" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Documentation </a>
                    </li>
                    <li>
                      <a href="./expo.html" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Customers </a>
                    </li>
                    <li>
                      <a href="https://wickedlabs.dev/" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> About </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase"> UI/UX & Dev </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <a href="https://www.wickedblocks.dev" class="text-base font-normal text-gray-500 hover:text-blue-600">
                        Wickled Blocks
                      </a>
                    </li>
                    <li>
                      <a href="https://www.wickedbackgrounds.com/" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Wicked Backgrounds </a>
                    </li>
                    <li>
                      <a href="https://wickedpopups.com/" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Wicked Popup's </a>
                    </li>
                    <li>
                      <a href="https://www.colorsandfonts.com/.html" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Colors & Fonts </a>
                    </li>
                    <li>
                      <a href="https://www.brutalist.one/.html" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Brutalist Websites</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase"> Legal </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <a href="/license" class="text-base font-normal text-gray-500 hover:text-blue-600">
                        License
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Privacy Policy </a>
                    </li>
                    <li>
                      <a href="/terms" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> Terms </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase"> Socials </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <a href="https://twitter.com/alvareztech" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      ">Twitter</a>
                    </li>
                    <li>
                      <a href="https://github.com/alvareztech" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      "> GitHub </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/alvareztech" class="
                        text-base
                        font-normal
                        text-gray-500
                        hover:text-blue-600
                      ">YouTube</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
          <div class="flex flex-wrap items-baseline">
            <span class="mt-2 text-sm font-light text-gray-500"> Copyright © 2020 - 2021 <a href="https://alvarez.tech" class="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@alvarez_tech</a>. Since 2010</span>
          </div>
        </div>
      </footer>

    </>
  )
}
