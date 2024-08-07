import { useEffect, useState } from "react";

export const useBrowser = () => {
  const [isAvaliable, setIsAvaliable] = useState(true);
  useEffect(() => {
    function getBrowser() {
      const browsers = ["chrome", "opera", "opera"];

      const userAgent = window.navigator.userAgent.toLowerCase();
      return browsers.some((b) => userAgent.includes(b));
    }
    if (!getBrowser()) setIsAvaliable(false);
  }, []);
  return isAvaliable;
};
