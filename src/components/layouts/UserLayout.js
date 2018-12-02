import React from 'react';
import { Layout} from 'antd';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';


const { Content } = Layout;

const UserLayout = (Component) => {
    return class extends React.Component {

        // constructor(props) {
        //     super(props);

        // }

        render() {
            return (
                <Layout>
                    <Content>
                        <Component {...this.props} />
                    </Content>
                </Layout>
            )
        }
    }
}

export default UserLayout;