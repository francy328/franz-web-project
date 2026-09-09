// stores/auth.js
import { defineStore } from 'pinia';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: null
  }),

  actions: {
    setUser(user) {
      this.user = user;
      this.authenticated = true;
    },

    async logout() {
      await signOut();      // logout Cognito
      this.user = null;     // pulizia Pinia
      this.authenticated = false;
    },

    async checkAuth() {
      try {
        this.user = await getCurrentUser();
        this.authenticated = true;
      } catch {
        this.user = null;
        this.authenticated = false;
      }
    }
  }
});