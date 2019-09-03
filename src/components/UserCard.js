import React from 'react'
import axios from 'axios';
import { Card, Grid, Icon } from 'semantic-ui-react';




class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/drewgoenner/followers')
        .then(res => this.setState({followers: res.data}))
        .catch(err => console.log(err))
    }

    render() {
    return (
        <>
        {this.props.user.map(newUser => (
            <Card
            image={newUser.avatar_url}
            header={newUser.name}
            meta={`Following: ${newUser.following}`}
            description={`Bio: ${newUser.bio}`}
            extra={`${newUser.followers} Followers`}
            />

            
        ))}
       
       <h1>Andrew's Followers</h1>
       <Grid relaxed columns={3}>
           <Grid.Row padded='vertically' columns={3}>
        {this.state.followers.map(newFollower => (
             <Card
             image={newFollower.avatar_url}
             header={newFollower.login}
             />

        ))}
        </Grid.Row>
        </Grid>
        </>
    );
        }
}




export default UserCard;