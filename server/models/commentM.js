function Comment(id, postid, content, author){
    this.CommentId = id;
    this.CommentPostId = postid;
    this.CommentContent = content;
    this.CommentAuthor = author;
  }

  Comment.prototype.getCommentPostId = function () {
    return this.CommentPostId;
  }

  Comment.prototype.getCommentContent = function () {
    return this.CommentContent;
  }
  
  Comment.prototype.getCommentAuthor = function () {
    return this.CommentAuthor;
  }

  Comment.prototype.setCommentPostId = function (postid) {
    this.CommentPostId = postid;
  }

  Comment.prototype.setCommentContent = function (content) {
    this.CommentContent = content;
  }
  
  Comment.prototype.setCommentAuthor = function (author) {
    this.CommentAuthor = author;
  }