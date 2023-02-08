import type { FC } from 'react';
import Head from 'next/head';
import { title as suffix, description as defaultDescription, logo } from '@/config';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  date?: string;
};

const SEO: FC<Props> = (props) => {
  const { keywords, image, title: prefix } = props;
  const title = prefix
    ? `${prefix} - ${suffix}`
    : `${suffix} - ${defaultDescription}`;
  const description = props.description || defaultDescription;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || logo} />
    </Head>
  );
};

export default SEO;
