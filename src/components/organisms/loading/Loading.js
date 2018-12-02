import React, { Component } from 'react';
import { Progress } from 'antd';
import Background from './progress.gif';


class Loading extends Component {
    render() {
        let {percent} = this.props;
        return (
            <div style={{
                display: "flex",
                flex: 1,
                height: "100vh",
                background: "#ffff",
                backgroundImage: `url(${Background})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
            }}>
                 <Progress percent={percent} />
            </div>
        );
    }
}

export default Loading;