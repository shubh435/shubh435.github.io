export const navigateTo = (text: string, navigate: (text: string) => void) => {
  if (text.includes('http')) {
    window.open(text, '_blank');
    return false;
  }
  if (text.includes('#')) {
    window.location.href = text;
    navigate(text);
    return false;
  }
  navigate(text);
};

export const calculateDateDifference = (dateString: string) => {
  const pastDate = new Date(dateString);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - pastDate.getTime());
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  return diffYears;
};
