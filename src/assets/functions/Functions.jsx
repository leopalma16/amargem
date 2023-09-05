const callOnWhats = () => {
  window
    .open(
      "https://api.whatsapp.com/send?phone=5511985829909&text=Ol%C3%A1,%20gostaria%20de%20falar%20sobre%20uma%20parceria.",
      "_blank"
    )
    .focus();
};

export { callOnWhats };
