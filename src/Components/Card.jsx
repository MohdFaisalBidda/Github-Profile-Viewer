import React from "react"
import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import "./Card.css"

export const Card = ({ username }) => {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [publicRepos, setPublicRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const url = "https://api.github.com/users/" + username;
    fetch(url)
      .then(results => {
        if (results.ok) return results.json();
      })
      .then(data => {
        setName(data.name);
        setAvatarUrl(data.avatar_url);
        setCompany(data.company);
        setLocation(data.location);
        setPublicRepos(data.public_repos);
        setFollowing(data.following);
        setFollowers(data.followers);
        setIsLoading(true);
      })
      .catch(error => {
        setError(true)
        setIsLoading(false);

        console.log(error);
      })


  }, [])


  return (
    <>
      {error === true && (<div className="empty">
        <h3>User Not Found</h3>
      </div>)}
      <div className="box">
        <div className="line"></div>
        <div className="img"><img src={avatarUrl} alt="" srcset="" /></div>
        </div>


      {name && (
        <div className="box">
          <div className="row">
            <div className="column col-lg-3 col-sm-6">
              <div className="card hovercard">
                <div className="cardheader"></div>
                <div className="avatar">
                  <img src={avatarUrl} className="image" />
                  <hr />
                </div>
                <div className="info">
                  <div className="title">
                    <h3>{name}</h3>
                  </div>
                  <div className="desc">
                    <h4><a href={"https://github.com/" + username}>@{username}</a></h4>
                    {/*<p> {company?company:null}</p>*/}
                    <p>{location}</p>
                  </div>

                </div>
              </div>
            </div>

            <table className="table"><thead><tr><th scope="row">REPOS</th><th scope="row">FOLLOWING</th><th scope="row">FOLLOWERS</th></tr></thead><tbody><tr><td>{publicRepos}</td><td>{following}</td><td>{followers}</td></tr></tbody></table></div></div>) || (error === false &&
              (<div className="loader" ><ClipLoader color="black" size={60} loading />
              </div>))
      }



    </>



  );
}