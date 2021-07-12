import React from "react";

import { ReactComponent as Like } from "../../../../../../assets/img/like.svg";
import { ReactComponent as Comment } from "../../../../../../assets/img/comment.svg";
import { PostActionProps } from "./interfaces";

function PostAction(props: PostActionProps) {
  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <Like />
        <span>{props.likes} Likes</span>
      </div>
      <div className="post-comment-icon commented">
        <Comment />
        <span>{props.comments.length} Comment</span>
      </div>
    </div>
  );
}

export default PostAction;
