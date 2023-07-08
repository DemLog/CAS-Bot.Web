import React from "react";

export interface SearchUserInputProps {
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void;
}