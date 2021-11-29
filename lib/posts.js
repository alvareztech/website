import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data')

export function getSortedPostsData() {
  console.log(">> getSortedPostsData:", postsDirectory)
  var fileNames = fs.readdirSync(postsDirectory, { withFileTypes: true })
  console.log(">> fileNames", fileNames)
  fileNames = fileNames.filter(fileName => fileName.isFile())
  console.log(">> fileNames", fileNames)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.name.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName.name)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

// 
export async function getPostData(slug) {
  console.log(">> getPostData", slug)
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const file = fs.readFileSync(filePath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(file)
  console.log(">> POST", matterResult)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data
  }
}
