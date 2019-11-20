import React from 'react';

class PigCard extends React.Component{
    constructor(){
        super()
        this.state = {
            display: false,
            showCard: true
        }
    }
   
    showdeets = () => {
        let show;
        
        this.state.display ? show = false : show = true

        this.setState({
            display: show
        })
    }

    showCard = () => {
        let show;
        this.state.showCard ? show = false : show = true

        this.setState({
            showCard: show
        })        
    }

    render(){
        let pigName = this.props.hogObject.name
        let pigimg = pigName.split(" ").join("_").toLowerCase()
        
        return(
            <div className="card">
            {this.state.showCard ? (
                <div className="content">
                    <h1 className="header">{this.props.hogObject.name}</h1>
            
                    <img src={require(`../hog-imgs/${pigimg}.jpg`)} alt={this.props.hogObject.name} />
                    <br></br>
                    {this.state.display ?(
                    <div>
                        <div className="description">
                        Specialty: {this.props.hogObject.specialty}
                        </div>

                        <div className="description">
                        Weight: {this.props.hogObject.weight}
                        </div>

                        <div className="description">
                        Highest Medal Achieved:{this.props.hogObject["highest medal achieved"]}
                        </div>
                    </div>
                        ): " " }
                                
                    <div className="ui card">
                        <button className="ui primary basic button"
                        onClick={this.showdeets}>More Info</button>

                        <button className="ui secondary basic button"
                        onClick={this.showCard}>Hide Card</button>
                    </div>
                </div> 
                

            ) : <button className="ui positive basic button" 
            onClick={this.showCard}>Show Card</button>}

            </div>
        )
    }
}

export default PigCard