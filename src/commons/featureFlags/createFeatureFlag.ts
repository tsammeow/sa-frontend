import { FeatureFlagsActions } from ".";
import { useFeatureFlag } from "./useFeatureFlag";
import { store } from "src/pages/createStore";

/**
 * 
 * @param featureFlag The name of the feature flag.
 * @param defaultValue The default value of the feature flag.
 * @returns [`featureFlag` the name of the feature flag, `useFlag` a React hook for this feature flag, `setFlag` to change the value of this feature flag, `resetFlag` to reset the value of this feature flag to its default value, `getFlag` to get the value of this feature flag]
 */
export function createFeatureFlag<T>(featureFlag: string, defaultValue: T):
    [string,
        () => T,
        (value: T) => ReturnType<typeof FeatureFlagsActions.setFlag>,
        () => ReturnType<typeof FeatureFlagsActions.resetFlag>,
        () => T] {
    const dispatch = store.dispatch;
    const useFlag = () => useFeatureFlag<T>(featureFlag, defaultValue);
    const setFlag = (value: T) => dispatch(FeatureFlagsActions.setFlag({ featureFlag, value }));
    const resetFlag = () => dispatch(FeatureFlagsActions.resetFlag({ featureFlag }));
    const getFlag = () => store.getState().featureFlags.modifiedFlags[featureFlag] ?? defaultValue;
    return [featureFlag, useFlag, setFlag, resetFlag, getFlag];
}
