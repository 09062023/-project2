import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons"; //导入图标组件
import { useNavigate, Routes, Route } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd"; //导入面包屑组件、layout布局、menu菜单三个组件
import React from "react";
import Review from "./06-表单form";
import NewTable from "./15-img";
import Slide from "./13-滑动输入条";

const { Header, Content, Footer, Sider } = Layout; //解构layout中的头部、内容、页脚，侧边栏
const items1 = ["1", "2", "3"].map((key) => ({
  //对应页头的nav1、2、3
  key,
  label: `nav ${key}`,
}));

const App = () => {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items2 = [
    getItem("review", "/review", <LaptopOutlined />),
    getItem("newTable", "/newTable", <NotificationOutlined />),
    getItem("tables", "/tables", <UserOutlined />),
  ];
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key, { replace: true });
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" /> {/* 设置头部logo区域 */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />{" "}
        {/* 菜单组件，默认key=2的是默认选中，items 数据来源于items，水平排列 */}
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
          }}
        >
          <Sider className="site-layout-background" width={200}>
            {" "}
            {/* 侧导航行内样式，items数据来源于items2 */}
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items2}
              onClick={onClick}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Routes>
              <Route exact path="/review" element={<Review />} />
              <Route path="/newTable" element={<NewTable />} />
              <Route path="/tables" element={<Slide />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
