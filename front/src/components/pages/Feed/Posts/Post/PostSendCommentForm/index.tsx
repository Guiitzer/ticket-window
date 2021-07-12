import React from "react";
import { useAppDispatch } from "../../../../../../redux/configureStore";
import { sendPostCommentApi } from "../../../../../../redux/reducers/postCommentsReducer";
import { updateIsTyping } from "../../../../../../redux/reducers/uiReducer";
import { PostSendCommentFormProps } from "./interfaces";

let timeoutId = null;
function PostSendCommentForm(props: PostSendCommentFormProps) {
  const [comment, setComment] = React.useState("");
  const dispatch = useAppDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value);

    const updateIsTypingAction = updateIsTyping(true);
    dispatch(updateIsTypingAction);

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    timeoutId = setTimeout(() => {
      dispatch(updateIsTyping(false));
    }, 1000);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      dispatch(sendPostCommentApi(props.post, comment));
    }
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input
          type="text"
          placeholder="Write your comment"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={comment}
        />
      </div>
    </div>
  );
}

export default PostSendCommentForm;
