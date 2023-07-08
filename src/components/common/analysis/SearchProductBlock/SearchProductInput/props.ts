import React from "react";

export interface SearchProductInputProps {
    setDataInput: React.Dispatch<React.SetStateAction<string>>;
    submitButton: () => void;
}