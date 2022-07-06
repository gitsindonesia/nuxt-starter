export const useLayout = () => {
  const isMini = useCookie<boolean>('mini');

  return { isMini };
};
