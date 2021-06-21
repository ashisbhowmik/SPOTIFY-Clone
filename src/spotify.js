// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "e12f6d23e5a74f6ebe92b47d844afa21";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//http://localhost:3000#access_token=BQDqmPtsqYRXYxYzES-cUcJJyul8rdGyhcfeQD6vtqqyN6PDw_VxO4otoSlMhR1rXGJdJvBdVC2z2_h5EIZWfZlwTBqww0T7L4xe59Pq1Ed7Gjsiq31NUZERynUuCgfwMJ3Zr-YkT_RaY8T46FMSxoVSEcbVPeFu0Hb7cGnrswjamR42&token_type=Bearer&expires_in=3600

// access token that will get from the response url is : BQDqmPtsqYRXYxYzES-cUcJJyul8rdGyhcfeQD6vtqqyN6PDw_VxO4otoSlMhR1rXGJdJvBdVC2z2_h5EIZWfZlwTBqww0T7L4xe59Pq1Ed7Gjsiq31NUZERynUuCgfwMJ3Zr-YkT_RaY8T46FMSxoVSEcbVPeFu0Hb7cGnrswjamR42

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// https://accounts.spotify.com/en/authorize?client_id=e12f6d23e5a74f6ebe92b47d844afa21&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true
