import { GITHUB, PROJ_NAME } from './environment';

export function getRelativePath(path: string): string {
  if (GITHUB) {
    const valid = /[^\/].*/g.exec(path);
    return valid ? `/${PROJ_NAME}/${valid[0]}` : `/${PROJ_NAME}/`;
  }
  return path;
}

export const breakpoints = {
  phone: '576',
  tablet: '992',
};

export const mediaQueryPhone = `@media (max-width: ${breakpoints.phone}px)`;
