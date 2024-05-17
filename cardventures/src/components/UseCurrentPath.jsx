import { matchRoutes, useLocation } from "react-router-dom"

const routes = [{ path: "/" }, { path: "/face-avant" }]

const useCurrentPath = () => {
  const location = useLocation()
  const [{ route }] = matchRoutes(routes, location)

  return route.path
}

export default useCurrentPath;