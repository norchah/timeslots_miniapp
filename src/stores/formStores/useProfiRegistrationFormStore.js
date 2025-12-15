import {createFormStore} from './createFormStore';
import {validateProfiRegistration} from './validators/profiRegistration.validator';
import ProfiApi from '../../api/profiApi';
import {useUserStore} from "../useUserStore.js";
import UserApi from "../../api/userApi.js";


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

  async submit(values, userId, navigate) {
    const profiApi = new ProfiApi();
    const userApi = new UserApi();

    await profiApi.create({
      userId,                     // сюда добавляем id
      displayName: values.displayName,
      displayLastname: values.displayLastname,
    });

    const setUserField = useUserStore.getState().setUserField;
    setUserField('displayName', values.displayName);
    setUserField('displayLastname', values.displayLastname);

    await userApi.updateIsPro(userId, true);

    if (navigate) navigate('homeProfi');
  }
});