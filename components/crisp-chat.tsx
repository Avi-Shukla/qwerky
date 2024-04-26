"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("67519077-066a-49d9-8236-2054ecbd7ae6");
  }, []);
  return null;
};
