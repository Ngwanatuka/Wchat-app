import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className={css(styles.post)}>
      <div className={css(styles.timemline__posts)}>
        <div className={css(styles.post__header)}>
          <div className={css(styles.post__headerAuthor)}>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            <div className={css(styles.user__name)}> {user}</div> •{" "}
            <span>{timestamp}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className={css(styles.post__image)}>
          <img src={postImage} alt="" />
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
    </div>
  );
}

const styles = StyleSheet.create({
  post: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightgrey",
    width: "31.25rem",
    margin: "1.875rem 2.5rem 3.125rem 2.5rem",
  },

  timemline__posts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.625rem",
    width: "100%",
  },

  post__header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.625rem",
  },

  post__headerAuthor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bolder",
    "& span": {
      color: "grey",
      fontSize: "0.9375rem",
      marginLeft: "0.3125rem",
    },
  },

  user__name: {
    marginLeft: "0.3125rem",
  },

  post__image: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    border: "0.6px solid lightgrey",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  post__footer: {},

  postIcon: {
    // padding: "7px",
    fontSize: "1.875rema",
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
