const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmQxZTZiNzYwMGI3YzcxZGFiMGEzZTY2NTkwNDU3MiIsInN1YiI6IjY0YjQ5ZWNkMjNkMjc4MDBlODhiZDNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzl2TVsm1dAM3dvcp7mSq1DPGVV2g63LjvWy1fxSqeM ",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}