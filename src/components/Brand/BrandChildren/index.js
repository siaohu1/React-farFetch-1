import React,{Component} from 'react';
import boom from '../../../static/img/3.jpg'
import {connect} from 'react-redux'
import action from '../../../store/action/brand'
import './index.less'
import BrandSlidres from "../BrandSlidres/index";
class BrandChildren extends Component{
    componentDidMount() {
        this.props.reqBrandChildren();
    }
    render(){
        console.log(this.props.brand.children);
        let arr = [];
        for (let i in this.props.brand.children.data){
            arr.push(this.props.brand.children.data[i])
        }
        return (
            <div className="brand-er">
                <BrandSlidres/>
                <h3>人气设计师品牌1</h3>
                <ul>
                    {
                        arr.map((item,index)=>(
                            <li key={index}>
                                <img src={item.url}/>
                                <p>{item.title}</p>
                                <span>选购全部</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default connect (
    state=>state,
    action
)(BrandChildren);
