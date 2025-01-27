import { useDispatch } from "react-redux";
import { FeatureFlagsActions } from ".";
import { useFeatureFlag } from "./useFeatureFlag";

export function createFeatureFlag<T>(featureFlag: string, defaultValue: T):
    [string,
        () => T,
        (value: T) => ReturnType<typeof FeatureFlagsActions.setFlag>,
        () => ReturnType<typeof FeatureFlagsActions.resetFlag>] {
    const dispatch = useDispatch();
    const useFlag = () => useFeatureFlag<T>(featureFlag, defaultValue);
    const setFlag = (value: T) => dispatch(FeatureFlagsActions.setFlag({ featureFlag, value }));
    const resetFlag = () => dispatch(FeatureFlagsActions.resetFlag({ featureFlag }));
    return [featureFlag, useFlag, setFlag, resetFlag];
}
