import { useSelector } from "react-redux";
import { OverallState } from "../application/ApplicationTypes";

export function useFeatureFlag<T>(featureFlag: string, defaultValue: T) {
    const flagValue = useSelector<OverallState, T | undefined>(state => state.featureFlags.modifiedFlags[featureFlag]) ?? defaultValue;
    return flagValue;
}
