export  const navigateTo = (text: string,navigate:(text:string)=>void) => {
    if (text.includes("http")) {
      window.open(text, "_blank");
      return false;
    }
    navigate(text);
  };
