export interface INavigationItem {
  text: string;
  link: string;
}

export const navigationItems: Array<INavigationItem> = [
  {
    text: 'Главная',
    link: '/overview',
  },
  {
    text: 'Пока хз',
    link: '/hz',
  },
];
