import type { SubmissionContext } from 'vee-validate'

export interface FormEvent {
  values: Record<string, any>
  ctx: SubmissionContext
}
