import { RootState } from "../../configureStore";

export function createComment(
  user: RootState["login"]["user"],
  comment: string
) {
  const id = Math.floor(Math.random() * 999).toString();
  const { image, name } = user;
  const newComment = {
    id: id,
    image: image,
    name: name,
    comment: comment,
  };

  return newComment;
}
