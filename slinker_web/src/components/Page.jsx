/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import React from 'react';
import Slinker from 'components/pages/Slinker';
import type { ConfigType } from '../config';

type Props = {
  name: string,
  params: {
    contextRoot: string
  },
  config: ConfigType
}

const returnParameterizedComponent =
  (name: string,
   params: Object = {},
   config: ConfigType
  ) => {
  const components = {
    Slinker: <Slinker config={config} params={params} />
  };
  return components[name];
};

const Page = ({
  name,
  params,
  config
}: Props) => returnParameterizedComponent(name, params, config) || null;

export default Page;
