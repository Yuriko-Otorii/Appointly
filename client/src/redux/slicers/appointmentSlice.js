import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointment: {
      hostUser: "641e13400eec447fa1cd2aee",
      appointmentDateTime: { date: "", time: "" },
    },
  },

  reducers: {
    setFromCalendar: (state, action) => {
      state.appointment.appointmentDateTime = action.payload;
    },
  },
});

export const {
  setFromCalendar,
  // setFromForm
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
