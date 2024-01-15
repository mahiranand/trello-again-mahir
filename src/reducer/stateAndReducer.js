export const initialState = {
  data: [],
  getData: "no-data",
  showForm: null,
  inputValue: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setData": {
      return {
        ...state,
        data: action.payload,
        getData: "got-data",
      };
    }
    case "error": {
      return {
        ...state,
        getData: "error",
      };
    }
    case "toggleOpen": {
      return {
        ...state,
        showForm: action.payload,
      };
    }
    case "addData": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "deleteData": {
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== action.payload),
      };
    }
    case "input": {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case "submit": {
      return {
        ...state,
        inputValue: "",
        showForm: null,
      };
    }
  }
};
