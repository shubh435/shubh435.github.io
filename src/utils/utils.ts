export  const navigateTo = (text: string,navigate:(text:string)=>void) => {
    if (text.includes("http")) {
      window.open(text, "_blank");
      return false;
    }
    if(text.includes("#")){
       window.location.href = text;
        navigate(text);
       return false;
    }
    navigate(text);
  };
