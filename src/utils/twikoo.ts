export const init = () => {
  const el = document.createElement('div');
  el.id = 't-comment';

  document.querySelector('#twikoo')?.remove();
  document.querySelector('#t-container')?.appendChild(el);

  // @ts-ignore
  window?.twikoo?.init({
    envId: 'https://sunny-twikoo.vercel.app',
    el: '#t-comment',
    lang: 'zh-CN',
  });
};
