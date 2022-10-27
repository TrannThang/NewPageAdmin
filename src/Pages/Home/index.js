import "./index.css";
import React, { useEffect } from "react";
import { selectLoading, selectZingNewContent } from "./store/selector";
import { getZingNewContent } from "./store/action";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

const Home = (props) => {
  // action
  const { zingNewShow } = props;
  // data
  const { zingNewContent, isLoading } = props;
  useEffect(() => {
    zingNewShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showData = zingNewContent.filter((el) => el.isShow === true);
  const data1 = showData.filter((el) => el.type === 1);
  const data2 = showData.filter((el) => el.type === 2);
  const data3 = showData.filter((el) => el.type === 3);
  return (
    <>
      <div>
        {/* <h1> Home page</h1> */}
        {/* <Link to="/about">Abuot /</Link>
        <Link to="/contact">Contact /</Link>
        <Link to="/404">404 /</Link> */}
      </div>
      <div className="main">
        <div className="slider_left type1 set-height">
          {data1.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="img"></img>
              <Link to="/titleId">
              <h6>{item.title}</h6>
              </Link>
            </div>
          ))}
        </div>
        <div className="slider_center type2">
          {data2.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="img"></img>
              <Link to="/titleId">
              <h4>{item.title}</h4>
              </Link>
              <p>{item.content}</p>
              <li>{item.description}</li>
            </div>
          ))}
        </div>
        <div className="slider_right type3">
          {data3.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="img"></img>
              <Link to="/titleId">
              <h6>{item.title}</h6>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// data State to Props
const mapStateToProps = createStructuredSelector({
  zingNewContent: selectZingNewContent,
  isLoading: selectLoading,
});

//action contact with API
const mapDispatchToProps = (dispatch) => ({
  zingNewShow: (payload) => dispatch(getZingNewContent(payload)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
