import React from 'react';
import LoadMasterData from '../components/organisms/load_master_data/LoadMasterData';
import Session from '../utils/Session';
import permissions from '../config/permissions';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
        let session = Session.get()
        this.state = {
            hasPermission: this.hasPermission(session),
            session: session
        }
    }

    hasPermission = (session) => {
        if (!session) return false;
        const userPermissions = session.user.permissions;
        let path = this.props.path;
        let hasPermission = false;
        if (permissions[path] === undefined || session.user.is_sadmin) {
            hasPermission = true;
        } else {
            for (let i in userPermissions) {
                if (i.trim() === '') continue;
                if (permissions[path].indexOf(i) > -1) {
                    hasPermission = true;
                    break;
                }
            }
        }

        return hasPermission
    }

    render() {
        let self = this;
        let { session } = this.state;
        if (!session) {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { from: self.props.location }
                }}
            />
        }
        return <LoadMasterData isLogin={false} component={this.props.component} {...this.props} />
    }
}

export default PrivateRoute;