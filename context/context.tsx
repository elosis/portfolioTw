"use client";
import React, { createContext, useState, useContext } from "react";

export interface PortfolioData {
  navBg: string;
  setNavBg: React.Dispatch<React.SetStateAction<string>>;
  linkColor: string;
  setLinkColor: React.Dispatch<React.SetStateAction<string>>;
}

export interface ContextValue {
  portfolioData: PortfolioData;
}

const defaultValue: PortfolioData = {
  navBg: "#ecf0f3",
  setNavBg: () => {},
  linkColor: "#1f1937",
  setLinkColor: () => {},
};

const PortfolioContext = createContext<ContextValue>({
  portfolioData: defaultValue,
});

const PortfolioLayer = (props: React.PropsWithChildren<{}>) => {
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f1937");

  const portfolioData: PortfolioData = {
    navBg,
    setNavBg,
    linkColor,
    setLinkColor,
  };

  const data: ContextValue = {
    portfolioData,
  };

  return (
    <PortfolioContext.Provider value={data}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioLayer, PortfolioContext, useContext };
