---
to: composables/<%= h.changeCase.lower(h.inflection.singularize(name)) %>.ts
---
import {CrudService} from '@gits-id/services';
import {useCrud} from '@/composables/crud';

export type <%= h.changeCase.pascal(name) %> = {
  id: number;
  created_at: string;
  updated_at: string;
}

export class <%= h.changeCase.pascal(name) %>Service extends CrudService<<%= h.changeCase.pascal(name) %>> {
  protected path = '<%= h.changeCase.lower(h.inflection.pluralize(name)) %>';
}

export type <%= h.changeCase.pascal(name) %>Payload = Record<string, any>;

export const use<%= h.changeCase.pascal(name) %> = () => useCrud<<%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Payload>(new <%= h.changeCase.pascal(name) %>Service());
