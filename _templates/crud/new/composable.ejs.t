---
to: composables/<%= h.changeCase.lower(h.inflection.singularize(name)) %>.ts
---
<%
  Fields = (locals.fields || '').split(',').map(v => v.split(':'));
  FieldNames = Fields.map(v => v[0]);
  PascalName = h.changeCase.pascal(name);
  PluralName = h.inflection.pluralize(name);
  SingularName = h.inflection.singularize(name);
  LowerPluralName = h.changeCase.lower(PluralName);
  LowerSingularName = h.changeCase.lower(SingularName);
  PascalPluralName = h.changeCase.pascal(PluralName);
  PascalSingularName = h.changeCase.pascal(SingularName);
%>
export type <%= PascalName %> = {
  id: number;
<% if(locals.fields){ -%>
<% Fields.forEach(function(field){ %>
  <%= field[0] %>: <%= field[1] %>;
<% }); %>
<% } -%>
  [x: string]: any;
};

export const use<%= PascalName %> = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;

  const all = (options?: Record<string, any>) => {
    return useFetch<<%= PascalName %>[]>('/<%= LowerPluralName %>', {
      baseURL,
      ...options,
    });
  };

  const create = (payload: Record<string, any>) => {
    return useFetch('/<%= LowerPluralName %>', {
      body: payload,
      method: 'POST',
      baseURL,
    });
  };

  const find = (id: string) => {
    return useFetch<<%= PascalName %>>(`/<%= LowerPluralName %>/${id}`, {
      baseURL,
    });
  };

  const update = (id: string, payload: Record<string, any>) => {
    return useFetch(`/<%= LowerPluralName %>/${id}`, {
      body: payload,
      method: 'PUT',
      baseURL,
    });
  };

  const remove = (id: string) => {
    return useFetch(`/<%= LowerPluralName %>/${id}`, {
      method: 'DELETE',
      baseURL,
    });
  };

  return { all, create, find, update, remove };
};
