import {configureStore} from '@reduxjs/toolkit'; //Bu kütüphane ile redux store oluşturuyoruz.
import userReducer from './user/userSlice'; //userReducer fonksiyonunu import ediyoruz.

export const store = configureStore({ //store'u configureStore fonksiyonu ile obje oluşturuyoruz.
    reducer: {user: userReducer}, //reducer'a userReducer fonksiyonunu atıyoruz.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ //Bu fonksiyon ile redux store'unun içindeki objelerin serialize edilmesini engelliyoruz.
        serializableCheck: false, 
    }),
});
