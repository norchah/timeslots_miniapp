import { createFormStore } from './createFormStore';
import { validateProfiRegistration } from './validators/profiRegistration.validator';
import ProfiApi from '../../api/profiApi';

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

  async submit(values) {
    const api = new ProfiApi();
    await api.create(values);
  },
});