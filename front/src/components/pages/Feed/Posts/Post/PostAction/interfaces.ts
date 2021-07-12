import { Post } from "../../../../../../redux/reducers/postsReducer/interfaces";

export interface PostActionProps {
  likes: Post["post"]["likes"];
  comments: Post["post"]["comments"];
}
