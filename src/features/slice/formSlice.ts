import { TypeRootState } from "app/providers/StoreProvider/ui/StoreProvider";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SendDataApi } from "features/sendData/sendData.api";

export enum ESex {
  MAN = "man",
  WOMAN = "woman",
}

export interface IUserInfo {
  nickname: string;
  name: string;
  sername: string;
  phone: string;
  email: string;
  sex: ESex;
  advantages: string[];
  checkbox: string[];
  radio: string;
  about: string;
}

export enum ERequestStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IInitialState {
  data: IUserInfo;
  request: {
    status: null | ERequestStatus;
  };
}

export const initialState: IInitialState = {
  data: {
    nickname: "",
    name: "",
    sername: "",
    phone: "+7",
    email: "",
    sex: ESex.MAN,
    advantages: ["", "", ""],
    checkbox: [],
    radio: "",
    about: "",
  },
  request: {
    status: null,
  },
};

export const sendData = createAsyncThunk(
  "form/sendUserData",
  async (data: Partial<IUserInfo>, thunkApi) => {
    thunkApi.dispatch(formSlice.actions.changeFields(data));
    const userData = (thunkApi.getState() as TypeRootState).form.data;
    console.log(userData);
    return await SendDataApi.sendUserData(userData);
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeFields(state, action) {
      return { ...state, data: { ...state.data, ...action.payload } };
    },
    resetStatus(state) {
      return {
        ...state,
        request: {
          ...state.request,
          status: null,
        },
      };
    },
    cleanStore(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendData.pending, (state) => {
      console.log("pending");
      state.request.status = ERequestStatus.LOADING;
    });
    builder.addCase(sendData.fulfilled, (state) => {
      console.log("fulfilled");
      state.request.status = ERequestStatus.SUCCESS;
    });
    builder.addCase(sendData.rejected, (state) => {
      console.log("reject");
      state.request.status = ERequestStatus.ERROR;
    });
  },
});

const { actions, reducer } = formSlice;

export default reducer;

export const { changeFields, resetStatus, cleanStore } = actions;
