import { FeatureFlag } from "src/commons/featureFlags/FeatureFlag";

export const featureConductor: FeatureFlag<boolean> = ["conductor.enable", true] as const;
