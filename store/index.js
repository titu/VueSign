import * as firebase from 'firebase';
import * as _ from 'lodash';

export const state = () => ({
  user: null
});

export const getters = {
  loggedInUser (state) {
    return state.user;
  },
  isUserSignedIn (state) {
    return !_.isNil(state.user);
  }
};

export const mutations = {
  setUser (state, payload) {
    state.user = payload;
  }
};

export const actions = {
  signUp ({commit}, payload) {
    const {email, password} = payload;

    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          commit('setUser', user);
          return user;
        }
      )
      .catch(
        err => console.log(err)
      )
  }
};
