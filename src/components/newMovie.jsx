import React from "react";
import Form from "./common/form";
import Joi from "joi";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.string()
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.string()
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
