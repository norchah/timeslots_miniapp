import { create } from 'zustand';

export function createFormStore({
  initialValues,
  validate,
  submit,
}) {
  return create((set, get) => ({
    values: { ...initialValues },
    errors: {},
    loading: false,

    setField(field, value) {
      set((state) => ({
        values: { ...state.values, [field]: value },
      }));
    },

    setValues(values) {
      set({ values });
    },

    reset() {
      set({
        values: { ...initialValues },
        errors: {},
        loading: false,
      });
    },

    validate() {
      const errors = validate(get().values);
      set({ errors });
      return Object.keys(errors).length === 0;
    },

    async submit(...args) {
      if (!get().validate()) return;

      set({ loading: true });
      try {
        await submit(get().values, ...args);
      } catch (e) {
        set({ errors: { form: e.message } });
      } finally {
        set({ loading: false });
      }
    },
  }));
}