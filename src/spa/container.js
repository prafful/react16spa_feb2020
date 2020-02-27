import React from 'react';
import Menu from './menu/menu';
import Content from './content/content';

class SPAContainer extends React.Component {
    state = {  }
    render() { 
        return (
            <div> 
                <h3>SPA Container</h3>
                <div>
                    <Menu></Menu>
                </div>
                <div>
                    <Content></Content>
                </div>

            </div>

         );
    }
}
 
export default SPAContainer;