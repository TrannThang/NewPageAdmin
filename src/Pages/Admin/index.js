import "./index.css";
import { useEffect, useState } from "react";
import {
  Button,
  Space,
  Table,
  Form,
  Switch,
  Modal,
  Input,
  Select,
  notification,
  Image,
} from "antd";
import {
  SmileOutlined,
  CheckOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { createStructuredSelector } from "reselect";
import {
  selectLoading,
  selectContent,
  selectDetailContent,
} from "./store/selector";
import {
  getAllContent,
  asyncGetDetailContentAction,
  asyncCreateContent,
  asyncDeleteContent,
  asyncUpdateContent,
} from "./store/action";
import { compose } from "recompose";
import { connect } from "react-redux";
const Admin = (props) => {
  const { listContent, isLoading } = props; //map State to Props
  const {
    zingNewContent,
    createNewContent,
    deleteContent,
    updateContentItem,
    detailsContent,
  } = props; //dispatch
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [edit, setEdit] = useState(true);
  const [formModal] = Form.useForm();
  useEffect(() => {
    zingNewContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: "isShow",
      dataIndex: "isShow",
      key: "isShow",
      align: "center",
      render: (values, record) => {
        return (
          <Switch
            className="switch-show"
            checked={values}
            onChange={(values) => handleSwitch(values, record)}
          ></Switch>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
      render: (text, record) => (
        <div>{text.length > 5 ? text.slice(0, 70) : "..."}</div>
      ),
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      align: "center",
      render: (text, record) => (
        <div>{text.length > 1 ? text.slice(0, 70) : "..."}</div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      className: "img-table",
      render: (text, record) => <Image className="" src={text} alt="" />,
    },
    {
      title: "Action",
      render: (text, record) => (
        <Space>
          <Button
            style={{ backgroundColor: "#d8b555" }}
            onClick={() => openModelEdit(text)}
          >
            <EditOutlined />
          </Button>
          <Button
            style={{ backgroundColor: "#d8564f" }}
            onClick={() => handleDelete(record.id)}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  const openNotification = (title, content, icon) => {
    notification.open({
      message: title,
      description: content,
      icon: icon ? (
        <CheckOutlined style={{ color: "green" }} />
      ) : (
        <SmileOutlined style={{ color: "red" }} />
      ),
    });
  };
  const handleDelete = async (values) => {
    const response = await deleteContent(values);
    if (response.status === 200) {
      zingNewContent();
      openNotification("Success", "Delete Complete !", true);
    } else {
      openNotification("Failed", "Delete Failed !", false);
    }
  };
  const handleSwitch = async (values, record) => {
    const params = {
      id: record.id,
      isShow: values,
    };
    const res = await updateContentItem(params);
    if (res) {
      zingNewContent();
    }
  };
  const handleClose = () => {
    setIsModalVisible(false);
    zingNewContent();
  };
  const openModal = () => {
    setIsModalVisible(true);
    formModal.resetFields();
  };
  const openModelEdit = async (id) => {
    setEdit(false);
    setIsModalVisible(true);
    const res = await detailsContent(id);
    if (res) {
      formModal.setFieldsValue({
        id: res.id,
        title: res.title,
        description: res.description,
        content: res.content,
        type: res.type,
        isShow: res.isShow,
      });
    }
  };
  const onFinish = async (values) => {
    if (values.id) {
      const res = await updateContentItem(values);
      if (res) {
        zingNewContent();
        openNotification("Success", "Edit Complete !", true);
      } else {
        openNotification("Failed", "Update Failed !", false);
      }
    } else {
      const response = await createNewContent(values);
      if (response.status === 201) {
        zingNewContent();
        openNotification("Success", "Create Complete !", true);
      } else {
        openNotification("Failed", "Create Failed !", false);
      }
    }
    setIsModalVisible(false);
  };
  const handleChange = () => {};
  const { Option } = Select;
  return (
    <div className="admin-page">
      <div
        style={{
          width: 256,
        }}
        className="menu-admin-page"
      >
        <h3>
        
        </h3>
      </div>
      <div className="table-admin">
        <div className="header-admin-page">
          <Button style={{ backgroundColor: "#ccc" }} onClick={openModal}>
            Create item Home
          </Button>

        </div>
        <Table
          dataSource={listContent}
          columns={columns}
          loading={isLoading}
          className="table-admin-page"
        />
        <Modal
          title={!edit ? "Edit Content" : "Create Content"}
          visible={isModalVisible}
          onCancel={handleClose}
          footer={
            <>
              <Button type="primary" htmlType="submit" form="formModal">
                {!edit ? "Save" : "Create"}
              </Button>
              <Button type="primary" onClick={handleClose} danger>
                Close
              </Button>
            </>
          }
        >
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
          
            onFinish={onFinish}
            autoComplete="off"
            form={formModal}
            name="formModal"
          >
            <Form.Item label="id" name="id">
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please input your Title!" },
                { min: 5, message: "Minimum 5 characters" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input your Description!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Content"
              name="content"
              rules={[
                { required: true, message: "Please input your Content!" },
                { max: 255, message: "Maximum 255 characters" },
              ]}
            >
              <Input maxLength={255} />
              </Form.Item>
            <Form.Item
              label="Image"
              name="image"
              rules={[
                { required: true, message: "Please input your Image!" },
                { max: 255, message: "Maximum 255 characters" },
              ]}
            >
              <Input maxLength={255} />
            </Form.Item>
            <Form.Item name="type" label="Type">
              <Select onChange={handleChange}>
                <Option value={1}>Type 1</Option>
                <Option value={2}>Type 2</Option>
                <Option value={3}>Type 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="isShow" label="IsShow">
              <Switch
                defaultChecked={true}
                onChange={(values) => handleSwitch(values)}
              ></Switch>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  listContent: selectContent,
  detailContent: selectDetailContent,
});

//gọi API
const mapDispatchToProps = (dispatch) => ({
  zingNewContent: (payload) => dispatch(getAllContent(payload)),
  detailsContent: (payload) => asyncGetDetailContentAction(dispatch)(payload),
  createNewContent: (payload) => asyncCreateContent(dispatch)(payload),
  deleteContent: (payload) => asyncDeleteContent(dispatch)(payload),
  updateContentItem: (payload) => asyncUpdateContent(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Admin);
