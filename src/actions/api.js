import { createAction } from '@reduxjs/toolkit';

export const apiCallStarted = createAction('api/callStarted');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');
