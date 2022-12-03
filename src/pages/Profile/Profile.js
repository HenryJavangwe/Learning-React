import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Container } from "react-bootstrap";
import '../../css/profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container fluid className="py-5 HeroProfile mt-5">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Container>
    )
  );
};

export default Profile;