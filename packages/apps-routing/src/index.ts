// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Routes } from './types.js';

import democracy from './democracy.js';

export default function create (t: TFunction): Routes {
  return [
    democracy(t)
  ];
}
