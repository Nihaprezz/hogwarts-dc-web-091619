import React from 'react';
import PigCard from '../components/PigCard'


class CardContainer extends React.Component{

    render(){
        return(
            <div className="ui link cards">
                {this.props.hogs.map(eachHog => {
                    return < PigCard key={eachHog.name} hogObject={eachHog}/>
                })}
            </div>
        )
    }
}

export default CardContainer