import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetachUser } from '../actions';

class UserHeader extends Component {
    componentDidMount () {
        this.props.fetachUser(this.props.userId);
    }
    render (props) {
        const user = this.props.userDetails.find( usr => usr.id === this.props.userId);
        if (!user) {
            return null;
        }
        return (
            <div className="header">
               {user.name}
            </div>
        );
    };
};
const mapStateToProps = state => {   
    return {
        userDetails: state.user
    };
}
export default connect(mapStateToProps, {
    fetachUser
})(UserHeader);