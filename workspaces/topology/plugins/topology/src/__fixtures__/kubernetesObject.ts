/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { mockKubernetesResponse } from './1-deployments';

export const kubernetesObject = {
  items: [
    {
      cluster: {
        name: 'minikube',
      },
      podMetrics: [],
      resources: [
        {
          type: 'pods',
          resources: mockKubernetesResponse.pods,
        },
        {
          type: 'services',
          resources: [],
        },
        {
          type: 'configmaps',
          resources: [],
        },
        {
          type: 'limitranges',
          resources: [],
        },
        {
          type: 'deployments',
          resources: [],
        },
        {
          type: 'replicasets',
          resources: [],
        },
        {
          type: 'horizontalpodautoscalers',
          resources: [],
        },
        {
          type: 'jobs',
          resources: mockKubernetesResponse.jobs,
        },
        {
          type: 'cronjobs',
          resources: mockKubernetesResponse.cronJobs,
        },
        {
          type: 'ingresses',
          resources: [],
        },
        {
          type: 'statefulsets',
          resources: mockKubernetesResponse.statefulsets,
        },
        {
          type: 'daemonsets',
          resources: [],
        },
      ],
      errors: [],
    },
  ],
};
