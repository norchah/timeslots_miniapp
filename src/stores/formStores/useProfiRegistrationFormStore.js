import {createFormStore} from './createFormStore';
import {validateProfiRegistration} from './validators/profiRegistration.validator';
import ProfiApi from '../../api/profiApi';
import {useUserStore} from "../useUserStore.js";


export const useProfiRegistrationFormStore = createFormStore({
  initialValues: {
    displayName: '',
    displayLastname: '',
    // acceptPolicy: false,
    // inn: '',
    // profiType: null,
    // photo: null,
  },

  validate: validateProfiRegistration,

  async submit(values, userId) {
    const api = new ProfiApi();
    await api.create(userId, values.displayName, values.displayLastname);

    const setUserField = useUserStore.getState().setUserField;
    setUserField('displayName', values.displayName);
    setUserField('displayLastname', values.displayLastname);
  },


});