import { DocSearch, DocSearchTranslations } from '@docsearch/react';
import { algolia } from '@/config';

const translations: DocSearchTranslations = {
  button: {
    buttonText: '搜索',
    buttonAriaLabel: '搜索',
  },
};

const Search = () => (
  <div className="group">
    <DocSearch {...algolia} translations={translations} />
  </div>
);

export default Search;
