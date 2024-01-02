import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  personalInfo: {
    userName: "",
    email: "",
    phoneNumber: "",
  },
  yearlyPlan: false,
  planData: {},
  planAddOns: {},
}
const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      // return {
      //   ...state,
      //   personalInfo: { ...state.personalInfo, ...action.payload },
      // }
      state.personalInfo = action.payload
    },
    updateYearlyPlan: (state, action) => {
      return { ...state, yearlyPlan: action.payload }
    },
    updatePlanData: (state, action) => {
      // return { ...state, planData: { ...state.planData, ...action.payload } }
      state.planData = action.payload
    },
    updatePlanAddOns: (state, action) => {
      return { ...state, planAddOns: action.payload }
    },
    resetSelection: (state) => {
      return initialState
    },
  },
})

export const {
  updatePersonalInfo,
  updateYearlyPlan,
  updatePlanData,
  updatePlanAddOns,
  resetSelection,
} = commonSlice.actions

export default commonSlice.reducer
