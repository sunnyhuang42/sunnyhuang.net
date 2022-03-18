import type { FC, useMemo } from 'react';
import Head from 'next/head';
import { title as suffix, description as defaultDescription } from 'config';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  date?: string;
};

const SEO: FC<Props> = (props) => {
  const { keywords, title: prefix } = props;
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
    </Head>
  );
};

export default SEO;
