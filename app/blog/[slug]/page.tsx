
/* This params props is passed by nextjs */
const BlogPostPage = ({ params }: any) => {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
        </main>
    )
}

export default BlogPostPage;