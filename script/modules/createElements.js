const createArticleImage = (index) => {
  const articleImage = document.createElement('img');
  articleImage.classList.add('article-section__image');
  articleImage.setAttribute('src', `https://loremflickr.com/400/400?${index}`);

  return articleImage;
};

const createArticleLink = (arr) => {
  const articleLink = document.createElement('a');
  articleLink.setAttribute('href', `article.html?${arr.id}`)
  articleLink.classList.add('article-section__title');
  articleLink.textContent = `${arr.title}`;

  return articleLink;
};

export const createArticle = (arr, index) => {
  const articleWrapper = document.createElement('li');
  articleWrapper.classList.add('article-section');

  articleWrapper.append(createArticleImage(index));
  articleWrapper.append(createArticleLink(arr));

  return articleWrapper;
};

