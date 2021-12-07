import Layout from "../components/layout";
import {getTags} from "../lib/posts";
import Link from "next/link";
import {classNames, tagColor} from "../lib/util";

export default function Tag({tags}) {
  return (<Layout>
    <div
      className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">

      <p>{tags.length} tags.</p>
      <p>
        {tags.map(tag => (
          <Link href={"/tag/" + tag}>
            <a>
          <span
            key={tag}
            className={classNames("uppercase", tagColor(tag), 'inline-flex items-center px-2 rounded text-xl font-bold')}>
              {tag}
            </span>
            </a>
          </Link>
        ))}
      </p>
    </div>
  </Layout>)
}

export async function getStaticProps() {
  const tags = getTags()
  console.log("ALL TAGs", tags.length)
  return {
    props: {
      tags
    }
  }
}
