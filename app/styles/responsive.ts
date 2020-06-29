import { screen } from './resolution';

// ag- and greather, al - and less
export const responsive = {
  xxs: `@media (max-width: ${screen.xxs}px)`,
  xs: `@media (max-width: ${screen.xsMax}px)`,
  sm: `@media (min-width: ${screen.smMin}px) and (max-width: ${screen.smMax}px)`,
  sm_al: `@media (max-width: ${screen.smMax}px)`,
  sm_ag: `@media (min-width: ${screen.smMin}px)`,
  md: `@media (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
  md_al: `@media (max-width: ${screen.mdMax}px)`,
  md_ag: `@media (min-width: ${screen.mdMin}px)`,
  lg: `@media (min-width: ${screen.lgMin}px) and (max-width: ${screen.lgMax}px)`,
  xl: `@media (min-width: ${screen.xlMin}px)`,
  tablet: `@media only screen and (orientation: portrait)`,
  iPad: `@media (min-width: ${screen.xs}) and (max-width: ${screen.sm}px)`,
  iPadPro: `@media only screen and (orientation: portrait) and (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
};
