export const app_version = 'alpha v. 0.6';
export const app_name = 'Prideflags.info';
export const app_baseUrl = 'https://prideflags.info';

const brekpoints = {
  xsmall: '250',
  small: '360',
  medium: '600',
};

export const matchMedia = {
  medium_down: `(max-width: ${brekpoints.medium}px)`,
  medium_up: `screen and (min-width: ${brekpoints.medium++}px)`,
};
