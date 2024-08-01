import React, { useEffect, useState } from "react";
import { updateUserData } from "../apis/userApi";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { StateStatusEnum } from "../enums/api-status.enum";

const UpdateButton = () => {
  const dispatch = useAppDispatch();
  const { updateUser } = useAppSelector((state) => state.user);
  const [notiMessage, setNotiMessage] = useState("");
  const [notiColor, setNotiColor] = useState("success.main");

  const handleUpdate = async () => {
    dispatch(
      updateUserData({
        id: "zu7hE5r53pWwp54HNWYc",
        name: "Charlie Bao",
        age: 20,
      })
    );
  };

  useEffect(() => {
    if (updateUser.status == StateStatusEnum.failed) {
      // @ts-ignore
      setNotiMessage(updateUser.error?.message || "Update user data failed");
      setNotiColor("secondary.main");
    } else if (updateUser.status === StateStatusEnum.success) {
      setNotiMessage("Update user data successfully");
    }
  }, [updateUser]);

  return updateUser.status === StateStatusEnum.loading ? (
    <CircularProgress />
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        // @ts-ignore
        disabled={updateUser.status === StateStatusEnum.loading}
      >
        Update Data
      </Button>
      <Typography
        variant="body1"
        sx={{
          color: notiColor,
        }}
      >
        {notiMessage}
      </Typography>
    </>
  );
};

export default UpdateButton;
