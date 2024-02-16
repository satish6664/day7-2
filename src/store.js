import { createStore } from 'vuex';


export default createStore({

state: {

images: [],

},

mutations: {

addImage(state, image) {

state.images.push(image);

},

deleteImage(state, index) {

state.images.splice(index, 1);

},

},

actions: {

addImage({ commit }, image) {

commit('addImage', image);

},

deleteImage({ commit }, index) {

commit('deleteImage', index);

},

},

getters: {

getAllImages: (state) => state.images,

},

});