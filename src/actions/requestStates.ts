export const requestReset = (): RequestState => {
  return {
    sending: false,
    success: false,
    error: false,
    message: "",
  };
};

export const requestSending = (): RequestState => {
  return {
    sending: true,
    success: false,
    error: false,
    message: "",
  };
};

export const requestSuccess = (message: string): RequestState => {
  return {
    sending: false,
    success: true,
    error: false,
    message: message,
  };
};

export const requestError = (message: string): RequestState => {
  return {
    sending: false,
    success: false,
    error: true,
    message: message,
  };
};

export interface RequestState {
  sending: boolean;
  success: boolean;
  error: boolean;
  message: string;
}
