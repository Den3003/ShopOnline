import {renderArticles, renderArticleText} from './modules/render.js';
const path = window.location.pathname;


if (path.includes("blog.html")) {
  renderArticles();
}

if (path.includes("article.html")) {
  renderArticleText();
}



