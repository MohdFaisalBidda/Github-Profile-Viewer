import React from "react"
import { useState, useEffect } from "react"
import "./Card.css"
import { BounceLoader } from "react-spinners"

export const Card = ({ username }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [location, setLocation] = useState("");
  const [publicRepos, setPublicRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [error, setError] = useState(false);


  useEffect(() => {
    const url = "https://api.github.com/users/" + username;
    fetch(url)
      .then(results => {
        if (results.ok) return results.json();
      })
      .then(data => {
        setLoading(true)
        setName(data.name);
        setAvatarUrl(data.avatar_url);
        setLocation(data.location);
        setPublicRepos(data.public_repos);
        setFollowing(data.following);
        setFollowers(data.followers);
        setError(false)
      })
      .catch(error => {
        setError(true)
        console.log(error);
      })


  }, [username])


  return (
    <>
      {error && (<div className="empty">
        <h3>User Not Found</h3>
      </div>)}

      {name && (<div className="box">
        <div className="line"></div>
        <div className="img">
          <img src={avatarUrl} alt="" srcset="" />
        </div>
        <div className="content">
          <div className="details">
            <h2>{name}<br /><span><a href={"https://github.com/" + username}>@{username}</a></span> <br /> <span>{location}</span></h2>
            <div className="data">
              <h3>{publicRepos} <br /> <span>REPOS</span></h3>
              <h3>{following} <br /> <span>FOLLOWING</span></h3>
              <h3>{followers} <br /> <span>FOLLOWERS</span></h3>
            </div>
          </div>
        </div>
      </div>) 
      }
      {!loading && (<BounceLoader color="#45f3ff" className="loader"/>)}


    </>



  );
}