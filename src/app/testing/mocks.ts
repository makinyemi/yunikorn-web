/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { of } from 'rxjs';
import { AppInfo } from '@app/models/app-info.model';
import { CommonUtil } from '@app/utils/common.util';

export const noopFn = () => {};

export const MockSchedulerService = {
  fetchClusterByName: () => of({}),
  fetchClusterList: () => of([]),
  fetchPartitionList: () => of([]),
  fetchSchedulerQueues: () => of({}),
  fetchAppList: () => of([]),
  fetchAppHistory: () => of([]),
  fetchContainerHistory: () => of([]),
  fetchNodeList: () => of([]),
  fetchNodeUtilization: () => of([]),
  fecthHealthchecks: () => of([]),
};

export const MockNgxSpinnerService = {
  show: noopFn,
  hide: noopFn,
};

export const MockEnvconfigService = {
  getSchedulerWebAddress: noopFn,
};

export const MockEventBusService = {
  getEvent: () => of<any>(),
  publish: noopFn,
};
