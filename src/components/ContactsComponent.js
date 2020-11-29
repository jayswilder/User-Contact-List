import React from 'react';

class ContactsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked: false,
            description: false
        }
    }

    likeButton = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    showDescription = () => {
        this.setState({
            description: !this.state.description
        })
    }

    render() {
        const details =
            <div>
                <p><h5>Age:</h5>{this.props.user.dob.age}</p>

                <p><h5>Location:</h5>{this.props.user.location.city}, {this.props.user.location.state}</p>

                <p><h5>Phone:</h5>{this.props.user.phone}</p>

                <p><h5>Cell:</h5>{this.props.user.cell}</p>

                <p><h5>Email:</h5>{this.props.user.email}</p>
            </div>
        return (
            <div className="card margin-bottom" style={{ width: "25rem" }}>
                <img src={this.props.user.picture.large} className="card-img-top beerImage" alt={this.props.user.name.first}></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.name.first} {this.props.user.name.last}</h5>
                    <button type="button" class="btn btn-primary" onClick={() => this.showDescription()}>{this.state.description ? "Hide Details" : "Show Details"}</button><br></br>

                    <div id="hideDetails" className="hideDetails">
                        <p className="card-text">
                            <br></br>
                            {this.state.description ? details : null}
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default ContactsComponent;


