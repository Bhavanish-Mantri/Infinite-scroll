const postsContainer = document.getElementById("posts-container");
const loader = document.getElementById("loader");
const filter = document.getElementById("filter");

let page = 0;
let isLoading = false;

const postsData = [
  {
    title: "Why Every Developer Should Build Side Projects",
    body: "Side projects help you learn faster, think independently, and stand out in interviews more than certificates ever will."
  },
  {
    title: "Infinite Scrolling: Smooth UX or Hidden Trap?",
    body: "Infinite scrolling feels modern, but when overused it can hurt usability. Balance is the real key."
  },
  {
    title: "Glassmorphism Is Back — Here’s How to Use It Right",
    body: "Blur, transparency, and subtle shadows can elevate your UI if used with restraint and purpose."
  },
  {
    title: "Beginner Mistake: Learning Frameworks Too Early",
    body: "Strong fundamentals in HTML, CSS, and JavaScript matter more than jumping into frameworks blindly."
  },
  {
    title: "Clean Code Is Not Optional",
    body: "Readable code saves time, reduces bugs, and makes collaboration easier — even when you work alone."
  },
  {
    title: "Frontend vs Backend: What Should You Learn First?",
    body: "Understanding how the web works end-to-end helps you choose the right path with confidence."
  }
];

function showPosts() {
  isLoading = true;

  setTimeout(() => {
    postsData.forEach((post, index) => {
      const postEl = document.createElement("div");
      postEl.classList.add("post");

      postEl.innerHTML = `
        <div class="number">${page * postsData.length + index + 1}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
      `;

      postsContainer.appendChild(postEl);
    });

    page++;
    isLoading = false;
  }, 700);
}

function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();

    post.style.display =
      title.includes(term) || body.includes(term) ? "flex" : "none";
  });
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (
    scrollTop + clientHeight >= scrollHeight - 5 &&
    !isLoading
  ) {
    showPosts();
  }
});

filter.addEventListener("input", filterPosts);


showPosts();
