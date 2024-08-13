import Home from '../components/icons/HomeIcon'
import Profile from '../components/icons/ProfileIcon'
import Followers from '../components/icons/FollowersIcon'
import Post from '../components/icons/PostIcon'
import Adopt from '../components/icons/SearchPetIcon'


export const sideBarLinks = [
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
  },
  {
    route: "/search",
    icon: Adopt,
    label: "Adopta"
  },

]