import Head from 'next/head';
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';
import Categories from '../components/Categories';
import { getPosts } from '../services';
import FeaturedPosts from '../sections/FeaturedPosts';

export default function Home({ posts }) {
  return (
    <div className={'container mx-auto px-10 mb-8'}>
      <Head>
        <title>IT Trends Blog</title>
        <meta name="description" content="IT Trends Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className={'grid grid-cols-1 lg:grid-cols-12 gap-12'}>
        <div className={'lg:col-span-8 col-span-1'}>
          {posts.map((item, index) => (
            <PostCard key={index} post={item.node} />
          ))}
        </div>
        <div className={'lg:col-span-4 col-span-1 '}>
          <div className={'lg:sticky relative top-8'}>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts: posts
    }
  };
}
