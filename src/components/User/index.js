import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import './style/Personal.less'
import {connect} from 'react-redux'
import actions from "../../store/action/session";

class User extends Component {
    render() {
        return (
            <div className="Account">
                <MHeader title={{title: '我的账户'}}/>
                <div className='content'>
                    <ul className='NewPersonals'>
                        <li className="clicks"
                            onClick={() => {
                                this.props.history.push("/login")
                            }}
                        >
                            <div
                                className="Features">{this.props.session.login.userId ? this.props.session.login.userId : "登录或者创建一个新账户"}
                                <img className="userImg" src={require('./user.jpg')}/>
                                {
                                    this.props.session.login.userId ?
                                        <button className="drop">退出</button> : this.props.session.login.userId
                                }
                            </div>
                            <span className="View">您可以从您任何电子装置查看您的购物袋与愿望单</span>
                        </li>
                        <li className="country">
                            <p className="Where">我的所在国家</p>
                            <span className="china">中国(CNY)<i className="arrows">&gt;</i></span>
                            <p className="Language">语言与交易货币将依照您选择的国家而定</p>
                            <span className="Buy">选购男士/女士</span>
                            <form action="" method="get">
                                <label>男士<input className=" mans" type="radio" value=""/></label>
                                <label>女士<input className="girl" type="radio" value=""/></label>
                            </form>
                        </li>
                        <li className="MySetting">
                            <p className="setup">我的设定</p>
                            <label>推送通知 <i className="arrows">&gt;</i></label>
                            <label>定位服务 <i className="arrows">&gt;</i></label>
                        </li>
                        <li className="contact">
                            <p className="contactus">联系我们</p>
                            <button className="iconfont icon-dianhua tels"></button>
                            <button className="iconfont icon-youxiang envelope"></button>
                            <p className="service">服务时间：周一至周五，北京时间09:00-18:00</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state,
    actions
)(
    User
)
