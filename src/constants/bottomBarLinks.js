import Home from '../components/icons/HomeIcon'
import Profile from '../components/icons/ProfileIcon'
import Followers from '../components/icons/FollowersIcon'
import Post from '../components/icons/PostIcon'


export const bottomBarLinks = [
  {
    route: "/social/home",
    icon: Home,
    label: "Inicio"
  },
  {
    route: "/social/profile/:id",
    icon: Profile,
    label: "Mi Perfil"
  },
  {
    route: "/social/followers",
    icon: Followers,
    label: "Seguidores"
  },
  {
    route: "/social/create_post",
    icon: Post,
    label: "Crear"
  }

]