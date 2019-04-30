import * as firebase from 'firebase';
import * as _ from 'lodash';

export const state = () => ({
  user: null
});

export const getters = {
  isUserSignedIn(state) {
    return !_.isNil(state.user);
  }
};

export const mutations = {
  setUser(state, user) {
    if (user && user.email && user.uid) {
      state.user = {
        email: user.email,
        id: user.uid
      };
    }
    else {
      state.user = null;
    }
  }
};

export const actions = {
  signUp({commit}, payload) {
    const {email, password} = payload;

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        data => {
          commit('setUser', data.user);
          return data.user;
        }
      )
      .catch(
        err => console.log(err)
      )
  },
  signIn({commit}, payload) {
    const {email, password} = payload;

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        user => {
          commit('setUser', user);
          return user;
        }
      )
      .catch(
        err => console.log(err)
      )
  },
  signOut({commit}) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
      })
      .catch(
        err => console.log(err)
      )
  }
};
