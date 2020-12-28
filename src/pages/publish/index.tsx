import React, { Component } from "react";

import { Steps } from "antd";

import "./index.less";
import Stepa from "./components/stepa";
import Stepb from "./components/stepb";
import Stepc from "./components/stepc";
import Stepd from "./components/stepd";

const { Step } = Steps;

interface Iprops {
  history: any;
}

class Publish extends Component<Iprops, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      stepCur: 4,
    };
  }

  render() {
    const { stepCur } = this.state;

    return (
      <div className="publish_wrap">
        <div className="step_wrap">
          <Steps current={stepCur}>
            <Step title="工具" description="开发者工具准备" />
            <Step title="分支" description="分支选择" />
            <Step title="内容" description="版本、描述等" />
            <Step title="完成" description="发布完成" />
          </Steps>
        </div>
        <div className="step_content_wrap">
          {stepCur === 0 && <Stepa />}
          {stepCur === 1 && <Stepb />}
          {stepCur === 2 && <Stepc />}
          {stepCur > 2 && <Stepd />}
        </div>
      </div>
    );
  }
}

export default Publish;
