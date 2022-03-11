// Blogs

const url = 'https://dev.to/api/articles?username=ivinoop';

let rootElm = document.querySelector('.blog-container');
let displayBlogs = document.querySelector('.display-blogs');

function createUI(blogs) {
  rootElm.innerHTML = '';
  blogs.forEach((blog) => {

    let blogContent = document.createElement('li');
    blogContent.href = blog.url;
    blogContent.target = '_blank';

    let blogText = document.createElement('div');
    blogText.classList.add('.blog-text');

    let blogTitle = document.createElement('h2');
    blogTitle.innerText = blog.title;

    let publishedDate = document.createElement('span');
    publishedDate.innerText = 'Published: ' + blog.readable_publish_date;

    let blogDescription = document.createElement('p');
    blogDescription.innerText = blog.description;

    let readMore = document.createElement('a');
    readMore.href = blog.url;
    readMore.target = '_blank';
    readMore.innerText = 'Read Article →';

    blogText.append(blogTitle, publishedDate, blogDescription, readMore);

    blogContent.append(blogText);

    rootElm.append(blogContent);
    displayBlogs.append(rootElm);
  });
} 

function fetchData() {
  fetch(url)
  .then((res) => res.json())
  .then((blogData) => {
    createUI(blogData);
  }) 
}

fetchData();