import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
});

async function getBlog(slug: string) {
    const { items } = await client.getEntries({
        content_type: 'PropertyVerse',
        'fields.slug': slug,
    });
    return items[0];
}

export async function generateStaticParams() {
    const response = await client.getEntries({ content_type: "PropertyVerse" });
    return response.items.map((item: any) => ({
        slug: item.fields.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const blog: any = await getBlog(params.slug);

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <article className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{blog.fields.title}</h1>

            <p className="text-xl text-gray-600 mb-6">{blog.fields.subheading}</p>

            {blog.fields.thumbnail && (
                <div className="mb-6">
                    <Image
                        src={`https:${blog.fields.thumbnail.fields.file.url}`}
                        width={blog.fields.thumbnail.fields.file.details.image.width}
                        height={blog.fields.thumbnail.fields.file.details.image.height}
                        alt={blog.fields.title}
                        className="rounded-lg"
                    />
                </div>
            )}

            <div className="text-gray-500 mb-6">
                Published on: {new Date(blog.fields.date).toLocaleDateString()}
            </div>

            <div className="prose prose-lg">
                {documentToReactComponents(blog.fields.content)}
            </div>
        </article>
    );
}

// Add this for Incremental Static Regeneration
export const revalidate = 60; // revalidate every 60 seconds