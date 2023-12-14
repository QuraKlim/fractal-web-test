import { TypeRootState } from "./../../../app/providers/StoreProvider/ui/StoreProvider";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
