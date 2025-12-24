import {createFormStore} from './createFormStore';
import UserApi from '../../api/userApi';
import {useUserStore} from '../useUserStore';
import {validateEditProfile} from './validators/editProfile.validator';
import TagApi from "../../api/tagApi.js";
import {useProfiStore} from "../useProfiStore.js";

export const useTagCreateFormStore = createFormStore({
  initialValues: {
    tagName: '',
    tagColor: '',
  },

  // validate: validateEditProfile,

  async submit(values, profiId) {
    const api = new TagApi();
    await api.create(profiId, values.tagName, values.tagColor);

    const loadProfi = useProfiStore.getState().loadProfi();
    loadProfi(profiId)
  },
});