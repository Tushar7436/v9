export const checkOverflow = () => {
  document.querySelectorAll("*").forEach(el => {
    if (el.scrollWidth > document.documentElement.clientWidth) {
      console.log("Element causing overflow:", el);
      el.style.outline = "2px solid red";
    }
  });
};
