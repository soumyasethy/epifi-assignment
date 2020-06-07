import * as React from 'react';
const isMountedRef = React.createRef();

export const navigationRef: any = React.createRef();
export const _goBack = () => {
  navigationRef.current?.goBack();
};
export const _goToPage = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export function _navigate(name:string, params:any) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  } else {
    console.warn('loading...');
  }
}
