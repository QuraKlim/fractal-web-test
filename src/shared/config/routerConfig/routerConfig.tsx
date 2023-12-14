import { type RouteProps } from "react-router-dom";
import { CredentialsScreen } from "pages/CredentialsScreen/CredentialsScreen";
import { AdditionalInfoScreen } from "pages/AdditionalInfoScreen/AdditionalInfoScreen";

export enum AppRoutes {
  CredentialsScreen = "credentials",
  AdditionalInfoScreen = "additional_info",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.CredentialsScreen]: "/credentials",
  [AppRoutes.AdditionalInfoScreen]: "/additional",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CredentialsScreen]: {
    path: RoutePaths.credentials,
    element: <CredentialsScreen />,
  },
  [AppRoutes.AdditionalInfoScreen]: {
    path: RoutePaths.additional_info,
    element: <AdditionalInfoScreen />,
  },
};
