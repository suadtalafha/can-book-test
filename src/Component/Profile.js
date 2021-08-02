import React from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';

class Profile extends React.Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0
        return (
            <>
                {isAuthenticated &&
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{user.name} Profile </Card.Title>
                                <Card.Text>
                                {user.email}
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>}
            </>
        )
    }
}

export default withAuth0(Profile)
