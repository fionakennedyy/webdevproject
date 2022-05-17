import { fetchDataGet } from "./main.js";
fetchDataGet('/post/getPosts', "GET")
.then((data) => {
    console.log(data);
  if(!data) {
    let output = "";
    for(let post in data){
        output+= `<h2 class="title">${post.PostTitle}</h2><br>
        <p class="content">${post.PostContent}</p><br>
        <p class="author">${post.PostAuthor}</p><br>
        <p class="commentnum">${post.PostCommentnum}</p><br><hr>`;
    }
    const postlist = document.getElementById("postlist");
    postlist.innerHTML = output;
  }
})
.catch((error) => {
    const errText = error.message;
    console.log(`Error! ${errText}`)
  });