import React,{Component} from 'react';
import './index.less';
import '/Users/tiger1/Desktop/React-farFetch/src/components/Home/Loading-db1/animate.css';
export default class Loading extends Component{
    handleLoad(){
      window.setTimeout("window.location='/#/home'",4000);
    }
    render(){
        return (
            <div>
              <img src={require("../../../static/img/loading.png")} className="loading-db animated-db1 flash" onLoad={this.handleLoad}/>
            </div>
        )
    }
}


<div>
  <img src="" alt=""/>
  <p></p>
  <h1></h1>
</div>












