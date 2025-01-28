import { DURATION } from "#styles/theme";

export const handleAppLoaded = () => {
  const preloader = document.getElementById("preloader") as HTMLElement;
  preloader.classList.remove("Preloader_show");
  document.body.style.overflow = "auto";
  setTimeout(() => preloader.remove(), DURATION.longer);
};
