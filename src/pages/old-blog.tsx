import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isClient } from '@/config';

const OldBlog = () => {
  const { replace, asPath } = useRouter();

  useEffect(() => {
    if (isClient) {
      const [slug, anchor] = window.location.hash.slice(1).split('?id=');
      replace(`${slug}${anchor ? `#${anchor}` : ''}` || '/');
    }
  }, [asPath]);

  return null;
};

export default OldBlog;
