// Generated GraphQL types, do not edit manually.

import * as Types from '../../graphql/types';

export type SingleScheduleQueryVariables = Types.Exact<{
  selector: Types.ScheduleSelector;
}>;

export type SingleScheduleQuery = {
  __typename: 'DagitQuery';
  scheduleOrError:
    | {__typename: 'PythonError'}
    | {
        __typename: 'Schedule';
        id: string;
        name: string;
        pipelineName: string;
        description: string | null;
        cronSchedule: string;
        executionTimezone: string | null;
        scheduleState: {
          __typename: 'InstigationState';
          id: string;
          runningCount: number;
          selectorId: string;
          status: Types.InstigationStatus;
          ticks: Array<{
            __typename: 'InstigationTick';
            id: string;
            status: Types.InstigationTickStatus;
            timestamp: number;
            skipReason: string | null;
            runIds: Array<string>;
            runKeys: Array<string>;
            error: {
              __typename: 'PythonError';
              message: string;
              stack: Array<string>;
              errorChain: Array<{
                __typename: 'ErrorChainLink';
                isExplicitLink: boolean;
                error: {__typename: 'PythonError'; message: string; stack: Array<string>};
              }>;
            } | null;
          }>;
          runs: Array<{
            __typename: 'Run';
            id: string;
            runId: string;
            status: Types.RunStatus;
            startTime: number | null;
            endTime: number | null;
            updateTime: number | null;
          }>;
          nextTick: {__typename: 'FutureInstigationTick'; timestamp: number} | null;
        };
        partitionSet: {__typename: 'PartitionSet'; id: string; name: string} | null;
      }
    | {__typename: 'ScheduleNotFoundError'};
};
