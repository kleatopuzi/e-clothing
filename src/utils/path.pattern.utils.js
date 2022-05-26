import { matchRoutes, useLocation } from "react-router-dom";

const useCurrentPath = () => {
  const location = useLocation();
  const routes = [{ path: location.pathname }];
  const [{ route }] = matchRoutes(routes, location);

  return route;
};

export default useCurrentPath;
