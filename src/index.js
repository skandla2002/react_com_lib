import React from 'react';
import Content from './Content';


export default class Contents extends React.Component {

    rootEl = React.createRef();

    contentInst = null;

    componentDidMount(){
        this.contentInst = new Content();
    }

    componentWillUnmount(){
        this.unbindEventHandler();

        this.contentInst.destroy();

        this.contentInst = null;
    }

    shouldComponentUpdate(nextProps){
        this.bindEventHandlers(this.props, nextProps);
        return false; // rneder 방지
    }

    getInstance(){
        return this.contentInst;
    }

    getRootElment(){
        return this.rootEl.current;
    }

    bindEventHandlers(props, prevProps){
        Object.keys(props)
            .filter(this.isEventHandlerKeys)
            .forEach((key) => {
                const eventName = key[2].toLowerCase() + key.slice(3);

                if(prevProps && prevProps[key] !== props[key]){
                    this.contentInst.off(eventName);
                }
                this.contentInst.on(eventName, props[key]);
            });
    }

    unbindEventHandler(){
        Object.keys(this.props)
            .filter(this.isEventHandlerKeys)
            .forEach((key) => {
                const eventName = key[2].toLowerCase + key.slice(3);
                this.contentInst.off(eventName);
            })
    }

    isEventHandlerKeys(key) {
        return /on[A-Z][a-zA-Z]+/.test(key);
    }

    render(){
        return <div ref={this.rootEl} />;
    }
}