export type RecordFromUnion<T extends string, R extends Record<T, any>> = {
  [K in T]: R[K];
};
