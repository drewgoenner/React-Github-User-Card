import React from 'react'
import axios from 'axios';
import { Card, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const MainCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 5%;

`;

const FollowerCard = styled.div`
margin: 2%;
justify-content: center;
`;




class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: [],
            // followersText: this.props.user.login
        }
        
    }

    componentDidMount() {
        console.log(this.props.user.login)
        axios
        .get(`https://api.github.com/users/drewgoenner/followers`)
        .then(res => this.setState({followers: res.data}))
        .catch(err => console.log(err))
    }

    render() {
    return (
        <>
        {this.props.user.map(newUser => (
            <div key = {newUser.id}>
            <MainCard>
            <Card
            href={`https://github.com/${newUser.login}`}
            image={newUser.avatar_url}
            header={newUser.name}
            meta={`Following: ${newUser.following}`}
            description={`Bio: ${newUser.bio}`}
            extra={`${newUser.followers} Followers`}
            />
            </MainCard>
            </div>

            
        ))}
       
       <h1> Followers:</h1>
       <Grid centered columns={3}>
            <Grid.Row padded='vertically' columns={3}>
                {this.state.followers.map(newFollower => (
                <div key={newFollower.id}>
                    <FollowerCard>
                        <Card
                            href={`https://github.com/${newFollower.login}`}
                            image={newFollower.avatar_url}
                            header={newFollower.login}
                    />
                    </FollowerCard>
            </div>

        ))}
            </Grid.Row>
        </Grid>
        </>
    );
        }
}




export default UserCard;