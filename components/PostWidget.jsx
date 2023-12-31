import React, { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log('relatedPosts', relatedPosts);
  return (
    <div className={'bg-white shadow-lg rounded-lg p-8 mb-8'}>
      <h3 className={'text-xl mb-8 font-semibold  border-b pb-4'}>
        {slug ? 'RelatedPosts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className={'flex items-center w-full mb-4'}>
          <div className={'w-16 flex-none'}>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height={'60px'}
              width={'60px'}
              className={'align-middle rounded-full'}
            />
          </div>
          <div className={'flex-grow ml-4'}>
            <p className={'text-gray-500 font-xs'}>{moment(post.createdAt).format('YYYY.MM.DD')}</p>
            <Link key={index} href={`/post/${post.slug}`} className={'text-md'}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
