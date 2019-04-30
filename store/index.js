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
    state.user = {
      email: user.email,
      id: user.uid
    };
  }
};

export const actions = {
  signUp({commit}, payload) {
    const {email, password} = payload;

    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        data => {
          commit('setUser', data.user);
          return data.user;
        }
      )
      .catch(
        err => console.log(err)
      )
  }
};
