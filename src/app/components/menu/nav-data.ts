import { faHome, faTasks } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/angular-fontawesome";

export interface INavData {
  path: string,
  title: string,
  icon: IconDefinition,
  class?: string,
}

export const menuData: INavData[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: faHome, class: '' },
  { path: '/icons', title: 'Icons',  icon: faTasks, class: '' },
  // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
]
