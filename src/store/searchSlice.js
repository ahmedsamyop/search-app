import setUrl from "../Api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (searchValue, thinkApi) => {
    const { rejectWithValue, dispatch } = thinkApi;
    try {
      const response = await fetch(setUrl(searchValue));
      const data = await response.json();
      dispatch(clearResultsImages());
      return data;
    } catch (erorr) {
      return rejectWithValue({ message: erorr.message, code: "404" });
    }
  }
);
export const getSearchResultsImages = createAsyncThunk(
  "search/getSearchResultsImages",
  async (searchValue, thinkApi) => {
    const { rejectWithValue } = thinkApi;
    try {
      const response = await fetch(setUrl(searchValue, "image"));
      const data = await response.json();
      return data;
    } catch (erorr) {
      return rejectWithValue({ message: erorr.message, code: "404" });
    }
  }
);
const initialState = {
  searchValue: "",
  results: {},
  resultsImages: {},
  isloaded: false,
  isErorr: null,
  display: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
    clearResultsImages: (state, action) => {
      state.resultsImages = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state, action) => {
        state.isloaded = false;
        state.isErorr = null;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isloaded = true;
        state.isErorr = null;
        if (action.payload.error) {
          state.isErorr = action.payload.error;
        } else {
          state.results = action.payload;
        }
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.isloaded = true;
        state.isErorr = action.payload;
      })
      .addCase(getSearchResultsImages.pending, (state, action) => {
        state.isloaded = false;
        state.isErorr = null;
      })
      .addCase(getSearchResultsImages.fulfilled, (state, action) => {
        state.isloaded = true;
        state.isErorr = null;
        if (action.payload.error) {
          state.isErorr = action.payload.error;
        } else {
          state.resultsImages = action.payload;
        }
      })
      .addCase(getSearchResultsImages.rejected, (state, action) => {
        state.isloaded = true;
        state.isErorr = action.payload;
      });
  },
  // extraReducers: {
  //   [getSearchResults.pending]: (state, action) => {
  //     state.isloaded = false;
  //     state.isErorr = null;
  //     console.log(action);
  //   },
  //   [getSearchResults.fulfilled]: (state, action) => {
  //     state.isloaded = true;
  //     state.isErorr = null;
  //     if (action.payload.error) {
  //       state.isErorr = action.payload.error;
  //     } else {
  //       state.results = action.payload;
  //     }
  //     console.log(action);
  //   },
  //   [getSearchResults.rejected]: (state, action) => {
  //     state.isloaded = true;
  //     state.isErorr = action.payload;
  //     console.log(action);
  //   },

  //   [getSearchResultsImages.pending]: (state, action) => {
  //     state.isloaded = false;
  //     state.isErorr = null;
  //     console.log(action);
  //   },
  //   [getSearchResultsImages.fulfilled]: (state, action) => {
  //     state.isloaded = true;
  //     state.isErorr = null;
  //     if (action.payload.error) {
  //       state.isErorr = action.payload.error;
  //     } else {
  //       state.resultsImages = action.payload;
  //     }
  //     console.log(action);
  //   },
  //   [getSearchResultsImages.rejected]: (state, action) => {
  //     state.isloaded = true;
  //     state.isErorr = action.payload;
  //     console.log(action);
  //   },
  // },
});
export const { setSearchValue, setDisplay, clearResultsImages } =
  searchSlice.actions;
export default searchSlice.reducer;
