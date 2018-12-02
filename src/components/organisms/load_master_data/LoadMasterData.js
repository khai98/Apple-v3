import React, { Component } from 'react';
import LocalStorage from '../../../utils/LocalStorage';
import { Redirect } from 'react-router-dom'
import Loading from '../loading/Loading';
import Preload from '../../../utils/Preload.v2';
import { Firebase } from '../../../utils/Firebase';

export default class LoadMasterData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            percent: 0
        };
        this.loading();
        this.checkLang();
        let self = this;
        Preload.execute(this.props.isLogin).then(res => {
            setTimeout(() => {
                new Firebase("").running()
            }, 10000);
            self.setState({
                percent: 100
            }, () => {
                setTimeout(() => {
                    self.setState({
                        isLoading: false
                    })
                }, 300)
            })
        });

        let t = setInterval(() => {
            if (this.state.isLoading && this.state.percent < 70) {
                this.setState({
                    percent: this.state.percent + Math.round((Math.random() * 15))
                })
            } else {
                clearInterval(t);
            }
        }, 300);
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 1950);
    };

    checkLang = () => {
        if (!LocalStorage.get("lang")) {
            LocalStorage.set("lang", "vi");
        }
    };

    render() {
        let Component = this.props.component;
        let { isLoading, percent } = this.state;
        if (!isLoading) {
            if (Component) {
                return (
                    <Component  {...this.props} />
                )
            }
            return <Redirect
                to={{
                    pathname: this.props.from
                }}
            />

        }
        return (
            <Loading
                percent={percent}
            />
        );
    }
}