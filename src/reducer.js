export const initialState = {
  user: null,
  token: null,
  // token:
  // "BQCV8r6btzCGfy5HwtetB5RVOHVejmgfoArOo3u1rc3_futunOELBJMbUres0bnPz-KIqPjxMhvGAI9PgSQD3aE7q7dATkrIgfzdBcldk1sn-7J0QHWMgz9sUPaTr27aTyAwaHrFWUCERyDeJ22F-9cZEd4P-PfvcCMQcEtoi0UWAFJb",
  // playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};
const reducer = (state, action) => {
  // console.log("the total action is 👏👏 ", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
