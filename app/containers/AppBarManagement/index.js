import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/chevron-left';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import { titleStyle }  from './styles';
import { withRouter } from 'react-router'

class AppBarManagement extends React.Component {
    handleLeftIcon = (e) => {
        e.preventDefault();
        const { match, location, history } = this.props
        history.goBack();
    }
    render(){
        return(
            <AppBar
                titleStyle={titleStyle}
                title="SignUp By Email"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.handleLeftIcon}
            />
        )
    }
}
export default withRouter(AppBarManagement);