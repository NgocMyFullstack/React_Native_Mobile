export interface State {
  carryingOption: "Onsite" | "Takeaway" | null;
  volumeOption: "Volume 250" | "Volume 350" | "Volume 450" | null;
  iceOption: "Light Ice" | "Regular Ice" | "Extra Ice" | null;
  syruptOption: string;
  milkOption: string;
}

type Action =
  | {
      type: "SET_ACTIVE_CARRYING";
      name: "Onsite" | "Takeaway";
      value: "Onsite" | "Takeaway" | null;
    }
  | {
      type: "SET_VOLUME";
      name: "Volume 250" | "Volume 350" | "Volume 450";
      value: "Volume 250" | "Volume 350" | "Volume 450" | null;
    }
  | {
      type: "SET_ICE";
      name: "Light Ice" | "Regular Ice" | "Extra Ice";
      value: "Light Ice" | "Regular Ice" | "Extra Ice" | null;
    }
  | {
      type: "SET_MILK";
      value: "";
    }
  | {
      type: "SET_SYRUPT";
      value: "";
    };

export const initialState: State = {
  carryingOption: null,
  volumeOption: null,
  iceOption: null,
  milkOption: "",
  syruptOption: "",
};

export const orderOptionsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ACTIVE_CARRYING":
      return { ...state, carryingOption: action.value };
    case "SET_VOLUME":
      return { ...state, volumeOption: action.value };
    case "SET_ICE":
      return { ...state, iceOption: action.value };
    case "SET_MILK":
      return { ...state, milkOption: action.value };
    case "SET_SYRUPT":
      return { ...state, syruptOption: action.value };
    default:
      return state;
  }
};
