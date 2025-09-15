import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/index.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: false },
    cover: { type: 'json', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    author: { type: 'string', required: true },
    draft: { type: 'boolean', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc.slug}`,
    },
  },
}))

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/*.md`,
  contentType: 'markdown',
  fields: {
    name: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    avatar: { type: 'string', required: false },
    bio: { type: 'string', required: false },
    links: { type: 'json', required: false },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['countries'],
  documentTypes: [Post, Author],
})
