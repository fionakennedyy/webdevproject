function Post(id, title, content, author, commentnum){
    this.PostId = id;
    this.PostTitle = title;
    this.PostContent = content;
    this.PostAuthor = author;
    this.PostCommentnum = commentnum;
  }
  
  Post.prototype.getPostTitle = function () {
    return this.PostTitle;
  }

  Post.prototype.getPostContent = function () {
    return this.PostContent;
  }
  
  Post.prototype.getPostAuthor = function () {
    return this.PostAuthor;
  }

  Post.prototype.getPostCommentnum = function () {
    return this.PostCommentnum;
  }

  Post.prototype.setPostTitle = function (title) {
    this.PostTitle = title;
  }

  Post.prototype.setPostContent = function (content) {
    this.PostContent = content;
  }
  
  Post.prototype.setPostAuthor = function (author) {
    this.PostAuthor = author;
  }

  Post.prototype.setPostCommentnum = function (commentnum) {
    this.PostCommentnum = commentnum;
  }