import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface GeneratedTrip {
  name: string;
  budget: string;
  weather: string;
  days: ItineraryDay[];
  image: string;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: "upcoming" | "past" | "draft";
  image: string;
  progress: number;
  generatedTrip?: GeneratedTrip;
}

interface TripState {
  trips: Trip[];
  activeTripId: string | null;
  lastGeneratedTrip: GeneratedTrip | null;
  setActiveTrip: (id: string) => void;
  addTrip: (trip: Trip) => void;
  updateTrip: (id: string, trip: Partial<Trip>) => void;
  deleteTrip: (id: string) => void;
  setTrips: (trips: Trip[]) => void;
  setLastGeneratedTrip: (trip: GeneratedTrip) => void;
}

const initialTrips: Trip[] = [
  {
    id: "1",
    title: "Amalfi Coast Escape",
    destination: "Italy",
    startDate: "Oct 12",
    endDate: "Oct 18",
    status: "upcoming",
    image: "/amalfi-luxury.png",
    progress: 80,
  },
  {
    id: "2",
    title: "Kyoto Sakura Season",
    destination: "Japan",
    startDate: "Apr 05",
    endDate: "Apr 15",
    status: "past",
    image: "/kyoto-luxury.png",
    progress: 100,
  },
  {
    id: "3",
    title: "Patagonia Trek",
    destination: "Argentina",
    startDate: "TBD",
    endDate: "TBD",
    status: "draft",
    image: "/amalfi-map.png",
    progress: 30,
  },
];

export const useTripStore = create<TripState>()(
  persist(
    (set) => ({
      trips: initialTrips,
      activeTripId: "1",
      lastGeneratedTrip: null,
      setActiveTrip: (id) => set({ activeTripId: id }),
      addTrip: (trip) => set((state) => ({ trips: [trip, ...state.trips] })),
      updateTrip: (id, updatedTrip) => 
        set((state) => ({
          trips: state.trips.map(t => t.id === id ? { ...t, ...updatedTrip } : t)
        })),
      deleteTrip: (id) => 
        set((state) => ({ trips: state.trips.filter(t => t.id !== id) })),
      setTrips: (trips) => set({ trips }),
      setLastGeneratedTrip: (trip) => set({ lastGeneratedTrip: trip }),
    }),
    {
      name: "traveloop-trips",
    }
  )
);
