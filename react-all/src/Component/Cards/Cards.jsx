import React, { Component, useContext } from "react";
// import { productProvider } from "./productContext";
import ProductContext, { ProductProvider } from "./ProductContext";
import axios from "axios";
import "./Cards.css";

export class Cards extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((resp) => {
        const p = resp.data;
        this.setState({ users: p });
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.users);
    return (
      <>
        <ProductProvider value={this.state.users}>
          <ProductChild />
        </ProductProvider>
      </>
    );
  }
}

function ProductChild() {
  const data = useContext(ProductContext);
  console.log("jjjj", data);
  return (
    <div className="main_div2">
      {data.map((elem) => {
        return (
          <div className="box">
            <h3>{elem.id}</h3>
            <h3>{elem.name}</h3>
            <h3>{elem.username}</h3>
            <h5>{elem.email}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;