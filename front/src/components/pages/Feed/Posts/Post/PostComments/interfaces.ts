import { Post } from "../../../../../../redux/reducers/postsReducer/interfaces";

export interface PostCommentsProps {
  comments: Post["post"]["comments"];
}
