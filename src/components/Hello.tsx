import * as React from "react";
import "../styles/hello.scss";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and <span className="hello">{this.props.framework}</span>!</h1>;
    }
}
