import React, { Component, Fragment } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  // displayMovies = index => {
  //   return this.state.movies.map(movie => {
  //     if (index) {
  //       return (
  //         <tr key={movie._id}>
  //           <td>{movie.title}</td>
  //           <td>{movie.genre.name}</td>
  //           <td>{movie.numberInStock}</td>
  //           <td>{movie.dailyRentalRate}</td>
  //           <td>
  //             <Like
  //               liked={movie.liked}
  //               onClick={() => this.handleLike(movie)}
  //             />
  //           </td>
  //           <td>
  //             <button
  //               onClick={() => this.handleDelete(movie)}
  //               className="btn btn-danger btn-sm"
  //             >
  //               Delete
  //             </button>
  //           </td>
  //         </tr>
  //       );
  //     }
  //   });
  // };

  handlePageChange = page => {
    console.log(page);
  };
  // handlePage = page => {
  //   const { movies } = this.state;
  //   const index = movies.indexOf(movie);

  //   switch (page) {
  //     case 1:
  //       if (index < 4) {
  //         () => this.displayMovies(index);
  //       }
  //     case 2:
  //       if (9 < index >= 4) {
  //         () => this.displayMovies(index);
  //       }
  //     case 3:
  //       if (14 < index >= 9) {
  //         () => this.displayMovies(index);
  //       }
  //   }
  // };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChage={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

export default Movies;
