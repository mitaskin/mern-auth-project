import { createSlice } from '@reduxjs/toolkit';

//Proje ilk açıldığında redux store'unun içindeki user objesinin ilk hali.
const initialState = {
    currentUser: null,
    loading: false,
    error: false,
    errorRes: '',
    errorMessage: ''
};

const userSlice = createSlice({ //createSlice fonksiyonu ile redux store'unun içindeki user objesini oluşturuyoruz.
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.currentUser = null;
            state.loading = true;
            state.error = false;
            state.errorRes = '';
            state.errorMessage = '';
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
            state.errorRes = '';
            state.errorMessage = '';
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorRes = action.payload;
            state.errorMessage = action.payload.message;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;