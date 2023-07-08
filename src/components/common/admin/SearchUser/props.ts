import React from "react";

export interface SearchUserProps {
    setUser: React.Dispatch<React.SetStateAction<{id: number, username: string, role: string} | null>>;
    onNext?: () => void;
}