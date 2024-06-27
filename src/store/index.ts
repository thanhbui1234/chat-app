// store.ts
import create from "zustand";
import { AppState } from "../schema/shcema";
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../libs/firebase";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const useAppStore = create<AppState>((set,get) => ({
  user: null,
  loading: false,
  error: null,
  setLoading: (loading) => set({ loading: loading }),
  setError: (error) => set({ error }),
  setUser: (user) => set({ user }),
  login: async (
    email: string,
    password: string,
    navigate: NavigateFunction
  ) => {
    set({ loading: true });
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      const uid = data.user.uid;
      await get().fetchUserInfo(uid); // Call fetchUserInfo here
      navigate("/dashboard");
    } catch (error) {
      if ((error as AuthError).code) {
        const authError = error as AuthError;
        toast.error(`Firebase Auth Error: ${authError.message}`);
      } else {
        toast.error(`Unknown error: ${error}`);
      }
    } finally {
      set({ loading: false });
    }
  },

  fetchUserInfo: async (uid: string) => {

    if (!uid) return set({ user: null });
    try {
      const docRef = doc(db, "user", uid);
      const docSnap = await getDoc(docRef)
      console.log(docSnap)
      if(docSnap.exists()){
        set({ user: docSnap.data(), loading: false });
      }else{
        set({ user: null, loading: false });
      }

    } catch (error) {
      if ((error as AuthError).code) {
        const authError = error as AuthError;
        toast.error(authError.message);
      }
      return set({ user: null, loading: false });
    }
  },
}));

export default useAppStore;
