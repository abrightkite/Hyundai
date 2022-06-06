import React, { useCallback, useEffect } from "react";
import Header from "../Header";

const HeaderContainer = () => {
  if (!sessionStorage.getItem("@lang")) {
    sessionStorage.setItem("@lang", "ko");
  }

  const setLangauge = useCallback((langauge) => {
    langauge === "en"
      ? sessionStorage.setItem("@lang", "en")
      : sessionStorage.setItem("@lang", "ko");
    window.location.reload();
  }, []);

  return <Header setLangauge={setLangauge} />;
};

export default HeaderContainer;
