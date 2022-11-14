import {
    YMaps,
  } from '@pbe/react-yandex-maps';

export const MapProvider = ({children}) => (
    <YMaps query={{
      ns: "use-load-option",
      load: 'package.full',
    }}>{children}</YMaps>
  );
