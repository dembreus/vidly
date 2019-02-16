export const genres = fetch("http://dry-meadow-34899.heroku.com/api/genres")
  .then(async function(response) {
    return response.json();
  })
  .then(function(myJson) {
    JSON.stringify(myJson);
    console.log(JSON.stringify(myJson));
  });

export function getGenres() {
  return genres;
}
