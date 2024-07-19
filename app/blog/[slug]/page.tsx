import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
});

const customOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
      [MARKS.CODE]: (text) => <code className="bg-gray-100 rounded p-1 font-mono text-sm">{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold mb-2 mt-5">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-bold mb-2 mt-4">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-bold mb-2 mt-3">{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-bold mb-2 mt-2">{children}</h6>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        return (
          <div className="my-4">
            <Image
              src={`https:${file.url}`}
              width={file.details.image.width}
              height={file.details.image.height}
              alt={description || title}
              className="rounded-lg"
            />
            {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // Handle embedded entries based on your content model
        const entry = node.data.target;
        if (entry.sys.contentType.sys.id === 'codeBlock') {
          return (
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-4">
              <code>{entry.fields.code}</code>
            </pre>
          );
        }
        // Add more embedded entry types as needed
        return null;
      },
    },
  };

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
                {documentToReactComponents(blog.fields.content, customOptions)}
            </div>
        </article>
    );
}

// Add this for Incremental Static Regeneration
export const revalidate = 60; // revalidate every 60 seconds