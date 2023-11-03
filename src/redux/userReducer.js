import { fetchUser, logOutUser, loginUser, signUpUser } from 'servise/api';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  user: {
    name: '',
    mail: '',
  },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};



export const signupThunk = createAsyncThunk(
  'user/signup',
  async (userData, thunkAPI) => {
    try {
      const responce = await signUpUser(userData);
      console.log(`responce:`, responce)

      return responce;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'user/login',
  async (userData, thunkAPI) => {
    try {
      const responce = await loginUser(userData);

      return responce;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const responce = await logOutUser();

      return responce;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserThunk = createAsyncThunk(
  "user/fetch",
  async (_, thunkAPI) => {
    try{
      const response = await fetchUser()

      return response
    }catch(e){
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)



const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
    // SIGNUP
    .addCase(signupThunk.pending, state => {
      state.error = null;
      state.isLoading = true
    })
    .addCase(signupThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token
      state.isLoggedIn = true
    })
    .addCase(signupThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // LOGIN
    .addCase(loginThunk.pending, state => {
      state.error = null;
      state.isLoading = true
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token
      state.isLoggedIn = true
    })
    .addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // LOGOUT
    .addCase(logOutThunk.pending, state => {
      state.error = null;
      state.isLoading = true
    })
    .addCase(logOutThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = INITIAL_STATE.user
      state.token = null
      state.isLoggedIn = false
    })
    .addCase(logOutThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // FETCH USER DATA
    .addCase(fetchUserThunk.pending, state => {
      state.error = null;
      state.isLoading = true
    })
    .addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload
      state.isLoggedIn = true
    })
    .addCase(fetchUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

});

export const userReducer = userSlice.reducer