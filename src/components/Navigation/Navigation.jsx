import { NavigationKey } from '../NavigationKey/NavigationKey';
// import { NavigationForm } from '../NavigationForm/NavigationForm';
import { NavigationSuffix } from '../NavigationSuffix/NavigationSuffix';
import { NavigationInst } from '../NavigationInst/NavigationInst';

export const Navigation = () => {
  return (
    <>
      <NavigationInst />
      <NavigationKey />
      <NavigationSuffix />
      {/* <NavigationForm k={options.k} s={options.s} /> */}
    </>
  );
};
