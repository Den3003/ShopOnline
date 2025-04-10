import {renderArticles, renderArticleText} from './modules/render.js';

const init = () => {
  renderArticles();

};

init();

if (window.location.pathname === '/article.html') {
  const articleId = +(window.location.search).slice(1);
  renderArticleText(articleId);
}

