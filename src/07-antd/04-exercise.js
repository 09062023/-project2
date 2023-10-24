import { Progress } from "antd";
import React from "react";
const App = () => (
  <>
    <Progress type="circle" percent={50} width={264} strokeWidth={8} />
    <Progress type="circle" percent={40} status="exception" />
    <Progress type="circle" percent={100} />
  </>
);
export default App;
