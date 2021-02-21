import { Fragment } from 'react';
import { eventNames as events } from './consts';

const {
    MOUSE_DOWN
} = events;


class Content {
    
    constructor(){
        this.state = {
            text: 'default text',
            button: ['first', 'second', 'third']
        }
    }

    onClickRandom = (evt) => {
        console.log(evt);
    }

    render(){
        return (
            <Fragment>
                {this.state.button && 
                <nav>
                    <ol>
                        {
                            this.state.button.map((data) => {
                                return <li>{data}</li>
                            })
                        }
                    </ol>
                </nav>
                }
                <article>
                    {this.state.text}
                </article>
                <button onClick={this.onClickRandom} />
            </Fragment>
        )
    }
    
}

export default Content;