import { create } from 'zustand';
import UserApi from '../api/userApi';
import { useUserStore } from './useUserStore';

export const useEditProfileFormStore = create((set, get) => ({
  values: {
    displayName: '',
    displayLastname: '',
    photoUrl: null,
  },

  errors: {},
  loading: false,

  initFromUser(user) {
    set({
      values: {
        displayName: user.displayName || '',
        displayLastname: user.displayLastname || '',
      },
      errors: {},
    });
  },

  setField(field, value) {
    set((state) => ({
      values: { ...state.values, [field]: value },
    }));
  },

  validate() {
    const { displayName, displayLastname } = get().values;
    const errors = {};

    if (!displayName.trim()) {
      errors.displayName = 'Имя не может быть пустым';
    }

    if (displayName.length > 30) {
      errors.displayName = 'Максимум 30 символов';
    }

    if (displayLastname.length > 30) {
      errors.displayLastname = 'Максимум 30 символов';
    }

    set({ errors });
    return Object.keys(errors).length === 0;
  },

  async submit(userId) {
    if (!get().validate()) return;

    set({ loading: true });

    try {
      const api = new UserApi();
      const { displayName, displayLastname } = get().values;

      await api.updateNames(userId, displayName, displayLastname);

      // ✅ обновляем userStore после успеха
      const setUserField = useUserStore.getState().setUserField;
      setUserField('displayName', displayName);
      setUserField('displayLastname', displayLastname);

    } catch (e) {
      set({ errors: { form: e.message } });
    } finally {
      set({ loading: false });
    }
  },
}));