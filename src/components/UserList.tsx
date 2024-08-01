"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { fetchUsers } from "@/apis/userApi";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { StateStatusEnum } from "@/enums/api-status.enum";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);

  const fetchAllUserData = async () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    fetchAllUserData();
  }, []);

  return users.status === StateStatusEnum.loading ? (
    <CircularProgress />
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        marginTop: "27px",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        User Data
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">GPA</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.value?.map(({ data: row }: { data: any }) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.gpa}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
