import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <div id="nav-main">
        <ul className="group">
          <li className="main-li">
            <a className="main-a" href="/comics">
              Comics
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/toys">
              Toys
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/tcg">
              TCG
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/statues">
              Statues
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/sportscards">
              Sports Cards
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/pedalcars">
              Pedal Cars
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/vintagead">
              Vintage Advertising
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 col-sm-10">
          <h4>Product Details</h4>
          {product && product.description && (
            <Card product={product} showViewProductButton={false} />
          )}
        </div>

        <div className="col-md-4">
          <h4>Related products</h4>
          {relatedProduct.map((p, i) => (
            <div className="mb-3" key={i}>
              <Card product={p} />
            </div>
          ))}
        </div>
        <div className="col-md-2"></div>
      </div>
    </Layout>
  );
};

export default Product;
