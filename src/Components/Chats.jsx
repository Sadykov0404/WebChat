import React, { useState, useEffect } from "react";
import logo from "./Loader/logo.png";

import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";
import Loader from "./Loader/Loader";

import axios from "axios";

import { useAuth } from "../Contexts/AuthContext";

export const Chats = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "f5989b10-1fb2-4191-a170-93c46cfed992",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "395d53f5-2008-45d1-80e1-18ca35314094",
              },
            })
            .then(() => setLoading(false))
            .catch((e) => console.log(e));
        });
      });
  }, [user, navigate]);
  if (!user || loading) return <Loader />;
  return (
    <div className="background">
      <div className="shaddow">
        <div className="nav-bar background">
          <div className="logo-tab">
            <img src={logo} alt="" width={100}/>
          </div>
          <div className="logout-tab" onClick={handleLogout}>
            Logout
          </div>
        </div>
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID="f5989b10-1fb2-4191-a170-93c46cfed992"
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    </div>
  );
};
