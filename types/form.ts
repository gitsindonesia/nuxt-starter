import { SubmissionContext } from 'vee-validate';

export type FormEvent = {
  values: Record<string, any>;
  ctx: SubmissionContext;
};
