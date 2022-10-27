import "./index.css";
import { Form, Input, Button, notification } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { selectLoading } from "./store/selector";
import { loginRequest } from "./store/action";
// import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withTranslation, useTranslation } from "react-i18next";
const LoginComponent = (props) => {
  const { t } = props;
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const onFinish = (values) => {
    const payload = {
      params: {
        userName: "admin1",
        password: "P@ssw0rd",
      },
      navigate,
    };
    if (
      values.userName === payload.params.userName &&
      values.password === payload.params.password
    ) {
      notification.open({
        message: "Login Success",
        icon: <CheckOutlined style={{ color: "green" }} />,
      });
      props.loginAction(payload);
    } else {
      notification.open({
        message: "Login Failed",
        icon: <CloseOutlined style={{ color: "red" }} />,
      });
    }
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-zing">
      <h1 className="bg-h1">
        <span className="text-1">Z</span>
        <span className="text-2">I</span>
        <span className="text-3">N</span>
        <span className="text-4">G </span>
        <span className="text-5">NEW</span>
      </h1>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        className="login-form"
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* <h1>{t("Login")}</h1> */}
        <Form.Item
          label={t("Username")}
          name="userName"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 5,
              message: "Min is 5 character!",
            },
            {
              max: 10,
              message: "Max is 10 character!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          className="pw"
          label={t("Password")}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {t("Login")}
          </Button>
        </Form.Item>
        <img
          className="img-country"
          src="https://cdn-icons-png.flaticon.com/512/555/555515.png"
          alt="vietnam"
          onClick={() => changeLanguage("vi")}
        />
        <img
          className="img-country"
          src="https://cdn-icons-png.flaticon.com/512/555/555417.png"
          alt="english"
          onClick={() => changeLanguage("en")}
        />
      </Form>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
});

//gọi API
const mapDispatchToProps = (dispatch) => ({
  loginAction: (payload) => dispatch(loginRequest(payload)),
});
// const withConnect = connect(mapStateToProps, mapDispatchToProps);
const Login = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);

export default Login;
