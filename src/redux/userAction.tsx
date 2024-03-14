import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUser = createAsyncThunk(
  "user/getUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      localStorage.setItem("userData", JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch user data");
    }
  }
);

export default getUser;
