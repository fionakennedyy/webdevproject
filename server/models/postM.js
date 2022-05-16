function Post(id, content, author, commentnum){
    this.PostId = id;
    this.PostContent = content;
    this.PostAuthor = author;
    this.PostCommentnum = commentnum;
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
  
  Post.prototype.setPostComment = function (content) {
    this.PostContent = content;
  }
  
  Post.prototype.setPostAuthor = function (author) {
    this.PostAuthor = author;
  }

  Post.prototype.setPostCommentnum = function (commentnum) {
    this.PostBCommentnum = commentnum;
  }