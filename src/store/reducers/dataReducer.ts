import { leaderboard } from "../../json";
import { SET_SEARCH_QUERY, DataActionTypes } from "../actions/dataActions";

export interface DataState {
  items: {
    key: string;
    name: string;
    stars: number;
    bananas: number;
  }[];
  searchQuery: string;
  filteredItems: {
    key: string;
    name: string;
    stars: number;
    bananas: number;
  }[];
}

const initialState: DataState = {
  items: Object.keys(leaderboard).map((key) => ({
    key,
    ...leaderboard[key as keyof typeof leaderboard],
  })),
  searchQuery: "",
  filteredItems: [],
};

const dataReducer = (
  state = initialState,
  action: DataActionTypes
): DataState => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      const filteredItems = state.items
        .sort((a, b) => b.bananas - a.bananas)
        .slice(0, 10)
        .sort((a, b) => a.stars - b.stars);

      let searchIndex = filteredItems.findIndex(
        (item) => item.name === action.payload
      );
      if (searchIndex === -1) {
        searchIndex = state.items.findIndex(
          (item) => item.name === action.payload
        );
        if (searchIndex !== -1) {
          filteredItems[9] = state.items[searchIndex];
        }
      }
      return {
        ...state,
        searchQuery: action.payload,
        filteredItems,
      };
    default:
      return state;
  }
};
export default dataReducer;
