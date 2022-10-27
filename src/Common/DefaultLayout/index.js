import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Common";
import routes from "../../routers";
import { getCookie } from "../../utils/request";
const DefaultLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getCookie("token");
    if (!token || token === "") {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showContentMenu = (routes) => {
    let result = null;
    if (routes) {
      result = routes.map((item, index) => (
        <Route key={item} path={item.path} element={item.component()} />
      ));
      return result;
    }
  };
  return (
    <div>
      <Header />
      <Routes>{showContentMenu(routes)}</Routes>
    </div>
  );
};
export default DefaultLayout;
