import {createFormStore} from './createFormStore';
import UserApi from '../../api/userApi';
import {useUserStore} from '../useUserStore';
import {validateEditProfile} from './validators/editProfile.validator';

export const useEditProfileFormStore = createFormStore({
  initialValues: {
    displayName: '',
    displayLastname: '',
  },

  validate: validateEditProfile,

  async submit(values, userId) {
    const api = new UserApi();
    await api.updateNames(userId, values.displayName, values.displayLastname);

    const setUserField = useUserStore.getState().setUserField;
    setUserField('displayName', values.displayName);
    setUserField('displayLastname', values.displayLastname);
  },
});