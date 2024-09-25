import React from 'react';
import './userCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt="User" />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
