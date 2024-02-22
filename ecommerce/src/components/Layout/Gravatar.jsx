import md5 from "md5";


const Gravatar = ({ userEmail }) => {
    const hashedEmail = md5(userEmail);
    console.log("Hashed Email:", hashedEmail); 
    const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}?s=40&d=monsterid`;
  
    return (
      <div>
        <img
          src={gravatarUrl}
          alt="Gravatar"
        />
      </div>
    );
  };
  
  export default Gravatar;