import "./index.css";
import React, { useEffect } from "react";
import { selectLoading, selectBook } from "./store/selector";
import { getAllBook } from "./store/action";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
const Book = (props) => {
  // action
  const { showListBook } = props;
  // data
  const { listBook, isLoading } = props;
  useEffect(() => {
    showListBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataShow = listBook.filter((el) => el.isShow === true);
  const data1 = dataShow.filter((el) => el.type === 1);
  const data2 = dataShow.filter((el) => el.type === 2);
  const data3 = dataShow.filter((el) => el.type === 3);
  return (
    <div className="containerBook container" loading={isLoading}>
      <div className="book-content">
        {data1.map((item, index) => (
          <div className="book-left-content" key={index}>
            <img src={item.image} alt="" />
            <Link to="/book/titleBook">
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="book-content">
        {data2.map((item, index) => (
          <div className="book-right-content" key={index}>
            <img src={item.image} alt="" />
            <Link to="/book/titleBook">
              <h4>{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
      <div className="book-bot-content col-tablet book-set">
        {data3.map((item, index) => (
          <div className="bot-book" key={index}>
            <img src={item.image} alt="" />
            <Link to="/book/titleBook">
              <h4 className="item-title">{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// data State to Props
const mapStateToProps = createStructuredSelector({
  listBook: selectBook,
  isLoading: selectLoading,
});

//action contact with API
const mapDispatchToProps = (dispatch) => ({
  showListBook: (payload) => dispatch(getAllBook(payload)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Book);
