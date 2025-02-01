import { createFeatureFlag } from "src/commons/featureFlags/createFeatureFlag";

export const [
    featureConductor,
    useFeatureConductor,
    setFeatureConductor,
    resetFeatureConductor,
    getFeatureConductor] = createFeatureFlag("conductor.enable", false);
