import { createStore } from "vuex";
import states from "@/store/modules/states";
import mutations from "@/store/modules/mutations";
import getters from "@/store/modules/getters";

const store = createStore({
  state: states,
  mutations,
  getters,
});

export default store;
