import * as React from "react";
import "../styles/Hello.scss";
import {Link} from "react-router";

export interface MainProps { compiler: string; framework: string; }

export default class Main extends React.Component<MainProps, {}> {
  render() {
    return <h1><Link to="/">Hello!{this.props.compiler} and <span className="hello">{this.props.framework}</span>!</Link></h1>;
  }
}
