const WelcomeMassage = ({ onGetpostsClick }) => {
  return (
    <center className="welcome-massage"> <h1> Welcome to all my users </h1>
      <button type="button"
        onClick={onGetpostsClick} className="btn btn-primary">
        Get posts from server</button>
    </center>

  )
}
export default WelcomeMassage; 