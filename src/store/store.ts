import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChangeInputState {
  open: boolean;
  message: string;
}

const initialState: ChangeInputState = {
  open: false,
  message: "",
};

// //////////
const changeInput = createSlice({
  name: "changeInput",
  initialState,
  reducers: {
    setInputText(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    activeButton: (state) => {
      if (state.message.length < 2) {
        alert("최소 2단어 이상 입력해주세요.");
      } else if (state.message.length > 15) {
        alert("15단어 이하로 입력해주세요.");
      } else {
        console.log(`${state.message} 입력 완료`);
      }
    },
  },
});

// export default configureStore({
//   reducer: {
//     changeInput: changeInput.reducer,
//   },
// });

export const { setInputText, activeButton } = changeInput.actions;
export const store = configureStore({
  reducer: {
    changeInput: changeInput.reducer,
  }
})
export type RootState = ReturnType<typeof store.getState>