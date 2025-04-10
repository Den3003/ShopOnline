import {createArticle} from "./createElements.js";
import domElements from "./domElements.js";
import {loadGoods} from "./fetchApi.js";

export const renderArticles = async () => {
  const data = await loadGoods();
  const articles = data.data.map((item, index) => createArticle(item, ++index));

  domElements.articlesWrapper.append(...articles);
};

export const renderArticleText = async (id) => {
  const data = await loadGoods();

  data.data.forEach(element => {
    if (element.id === id) {
      domElements.articleTitle.textContent = element.title;
      domElements.articleBody.textContent = element.body;
      domElements.articleAuthor.textContent = element.user_id;
    }
  });
};