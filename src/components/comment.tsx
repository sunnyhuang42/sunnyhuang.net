import { useEffect } from 'react';
import { useRouter } from 'next/router';

const twikoo = require('twikoo/dist/twikoo.min');

const Comment = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    const el = document.createElement('div');
    el.id = 't-comment';

    document.querySelector('#twikoo')?.remove();
    document.querySelector('#t-container')?.appendChild(el);

    twikoo?.init({
      envId: 'https://twikoo.sunnyhuang.net',
      el: '#t-comment',
      lang: 'zh-CN',
    });
  }, [asPath]);

  return (
    <div id="t-container" className="border-t pt-12 pb-6">
      <div id="t-comment" />
    </div>
  );
};

export default Comment;
