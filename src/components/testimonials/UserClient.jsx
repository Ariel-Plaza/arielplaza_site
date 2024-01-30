import "./userClient.sass";

export function UserClient({ userclient, jobposition }) {
  return (
    <div className="user_client">
      <div className="name">
        <p>/</p>
        <h3>{userclient}</h3>
      </div>

      <p>{jobposition}</p>
    </div>
  );
}

export default UserClient;
