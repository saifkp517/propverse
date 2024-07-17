import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function generateStaticParams() {
  try {
    const response = await client.getEntries({ content_type: "PropertyVerse" });
    const blogs = response.items;
    return blogs;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
