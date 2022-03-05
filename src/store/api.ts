import {createAction} from '@reduxjs/toolkit';

interface Props {
  url: string;
  onStart: string;
  onSuccess: string;
  onError: string;
}

export const apiCallBegan = createAction('api/callBegan', (props: Props) => ({payload: props}));
export const apiCallSucess = createAction('api/callSuccess', (data: any) => ({payload: data}));
export const apiCallFailed = createAction('api/callFailed', (error: string) => ({payload: error}));
