import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import fs from "fs";
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { Metadata } from "next";

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeAutolinkHeadings)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "github-dark-default",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const filePath = `content/${slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex">
        <div className="w-4/5 px-16">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
        <div>
          <OnThisPage
            className="text-sm sticky top-20"
            htmlContent={htmlContent}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const filePath = `content/${(await params).slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | MyCodingZone`,
    description: data.description,
  };
}

export default BlogPost;
