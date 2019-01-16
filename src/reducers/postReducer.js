const postReducer = (
  state = [
    {
      editing: "true",
      id: "Wed Jan 16 2019 13:30:28 GMT-0800 (Pacific Standard Time)",
      message: "things",
      title: "stuff"
    }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]);
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
    case "EDIT_POST":
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
