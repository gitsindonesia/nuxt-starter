---
to: composables/<%= h.changeCase.camel(name) %>.ts
---
export const use<%= h.changeCase.pascal(name) %> = () => {
  const isOpen = ref(true);

  return {isOpen};
};



