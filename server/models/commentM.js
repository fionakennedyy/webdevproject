function Comment(id, content, author){
    this.CommentId = id;
    this.CommentContent = content;
    this.CommentAuthor = author;
  }
  
  Comment.prototype.getCommentContent = function () {
    return this.CommentContent;
  }
  
  Comment.prototype.getCommentAuthor = function () {
    return this.CommentAuthor;
  }
  
  Comment.prototype.setCommentComment = function (content) {
    this.CommentContent = content;
  }
  
  Comment.prototype.setCommentAuthor = function (author) {
    this.CommentAuthor = author;
  }

//comment methods:
//createComment
//deleteComment