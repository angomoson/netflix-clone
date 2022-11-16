const API_KEY = "dbceef8dd381e38d4c7ca740dd64df1b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/trending/all/week?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
