import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/action/list';
import MHeader from '../../pubComponents/MHeader'
import './index.less'
import {Link} from 'react-router-dom'
import ListHeader from './ListHeader'
import ListBtn from './ListBtn'

class List extends Component {
    constructor() {
        super();
        this.state = {
            star: true,
            list: null,
            type: 'coat',
            offset: 0
        };
    }

    componentDidMount() {
        let initCls = {type: this.state.type, offset: this.state.offset};
        this.props.getDatas(initCls);
        this.setState({list: this.props.getList})
    }

    collection = (event) => {
        event.preventDefault();
        event.target.star = !event.target.star;
        event.target.className = event.target.star ? 'iconfont icon-gray-star active' : 'iconfont icon-gray-star';
        this.setState({isCollection: !this.state.isCollection});
        let isCollection = this.state.isCollection;
        let id = this.props.id;
        this.props.getCollects({isCollection, id})
    };


    chooseList = (type) => {
        setTimeout(() => {
            this.setState({type});
            let newCls = {type: this.state.type, offset: this.state.offset};
            this.props.getDatas(newCls);
        }, 500)
    };

    render() {
        let arr = [];
        let prdList = this.props.list.getList.prdList;
        for (let i in prdList) {
            arr.push(prdList[i]);
        }
        return (
            <div>
                <MHeader title={{title: '列表页'}}/>
                <div className="content">
                    <ListHeader
                        chooseList={this.chooseList}
                    />
                    <div className="container">
                        <h3>SALE|近4000件商品现有4折优惠</h3>
                        <div className="list-group">
                            {
                                arr.map((item, index) => (
                                    <Link key={item.id} to={{pathname: `/detail/${item.id}`, state: {item}}}>
                                        <ListBtn id={item.id}/>
                                        <img src={item.url}/>
                                        <p>{item.title}</p>
                                        <b>￥{item.price}</b>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {/*                        {
                            this.props.list.getList.hasMore ?
                                <div className="load-more">
                                    加载更多
                                </div> : <div className="load-more">
                                    别扯了，到底了
                                </div>
                        }*/}
                    </div>
                </div>

            </div>

        )
    }
}

export default connect(
    state => state,
    actions
)(List)