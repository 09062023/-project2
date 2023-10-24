import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Review from "./06-表单form";
import NewTable from "./15-img";
import Slide from "./13-滑动输入条";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Layouts = () => {
  const navigate = useNavigate();
  const toPage = (e) => {
    navigate(e.key, { replace: true });
  };
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              onClick={toPage}
            >
              <SubMenu key="sub1" title={<span>subnav 1</span>}>
                <Menu.Item key="1">
                  <Link to="/review">home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/newTable">detail</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/slide">slide</Link>
                </Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="./review" element={<Review />} />
                <Route path="./newTable" element={<NewTable />} />
                <Route path="./slide" element={<Slide />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default Layouts;
