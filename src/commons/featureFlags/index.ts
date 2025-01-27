import { createSlice } from "@reduxjs/toolkit";

export type FeatureFlagsState = {
    modifiedFlags: { [property: string]: any }
};

export const defaultFeatureFlags = {
    modifiedFlags: {}
};

const featureFlagsSlice = createSlice({
    name: "featureFlags",
    initialState: defaultFeatureFlags,
    reducers: {
        setFlag(state: FeatureFlagsState, action: { payload: { featureFlag: string, value: any } }) {
            state.modifiedFlags[action.payload.featureFlag] = action.payload.value;
        },
        resetFlag(state: FeatureFlagsState, action: { payload: { featureFlag: string } }) {
            state.modifiedFlags[action.payload.featureFlag];
        }
    }
});

export const FeatureFlagsActions = featureFlagsSlice.actions;

export const FeatureFlagsReducer = featureFlagsSlice.reducer;
