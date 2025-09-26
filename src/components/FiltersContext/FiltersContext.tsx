import { createContext, useContext, useState } from "react";
import type { Appointment } from "../../types/appointment";

type FiltersContextType = {
  status: Appointment["status"];
  setStatus: (v: Appointment["status"]) => void;
  city: string;
  setCity: (v: string) => void;
  state: string;
  setState: (v: string) => void;
  appointmentTypes: string[];
  setAppointmentTypes: (v: string[]) => void;
  paymentMethods: string[];
  setPaymentMethods: (v: string[]) => void;
  gender?: "Male" | "Female";
  setGender: (v: "Male" | "Female" | undefined) => void;
  sortBy: "Date" | "Amount" | "Name";
  setSortBy: (v: "Date" | "Amount" | "Name") => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (v: "asc" | "desc") => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  dateRange: [Date | null, Date | null];
  setDateRange: (v: [Date | null, Date | null]) => void;
  resetFilters: () => void;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Appointment["status"]>("Dismissed");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [appointmentTypes, setAppointmentTypes] = useState<string[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);
  const [gender, setGender] = useState<"Male" | "Female" | undefined>();
  const [sortBy, setSortBy] = useState<"Date" | "Amount" | "Name">("Date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const resetFilters = () => {
    setStatus("Dismissed");
    setCity("");
    setState("");
    setAppointmentTypes([]);
    setPaymentMethods([]);
    setGender(undefined);
    setSortBy("Date");
    setSortOrder("asc");
    setSearchQuery("");
    setDateRange([null, null]);
  };

  return (
    <FiltersContext.Provider
      value={{
        status, setStatus,
        city, setCity,
        state, setState,
        appointmentTypes, setAppointmentTypes,
        paymentMethods, setPaymentMethods,
        gender, setGender,
        sortBy, setSortBy,
        sortOrder, setSortOrder,
        searchQuery, setSearchQuery,
        dateRange, setDateRange,
        resetFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error("useFilters must be used inside FiltersProvider");
  return ctx;
};
