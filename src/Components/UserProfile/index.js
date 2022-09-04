import "./index.css";

const UserProfile = (props) => {
  const { userDetails } = props;
  const { name, role, imageUrl } = userDetails;
  return (
    <li className="profile-container">
      <img src={imageUrl} alt="avatar" className="avatar" />
      <div className="profile-text-container">
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
      </div>
    </li>
  );
};

export default UserProfile;
