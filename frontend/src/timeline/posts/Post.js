import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className={css(styles.post)}>
      <div className={css(styles.post__header)}>
        <div className={css(styles.post__headerAuthor)}>
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className={css(styles.post__image)}>
        <img
        src={postImage}
          alt=""
        />
      </div>
      <div className={css(styles.post__footer)}>
        <div className={css(styles.post__footerIcons)}>
          <div className={css(styles.post__iconMian)}>
            <FavoriteBorderIcon className={css(styles.postIcon)} />
            <ChatBubbleOutlineIcon className={css(styles.postIcon)} />
            <TelegramIcon className={css(styles.postIcon)} />
          </div>
          <div className={css(styles.post__iconSave)}>
            <BookmarkBorderIcon className={css(styles.postIcon)} />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  post: {
    width: "550px",
    margin: "30px 40px 50px 40px",
  },

  post__header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },

  post__headerAuthor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bolder",
    "& span": {
      color: "grey",
      fontSize: "15px",
    },
  },

  post__image: {
    width: "100%",
    borderRadius: "5px",
    border: "0.6px solid lightgrey",
  },

  post__footer: {},

  postIcon: {
    // padding: "7px",
    fontSize: "30px",
  },

  post__footerIcons: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default Post;
