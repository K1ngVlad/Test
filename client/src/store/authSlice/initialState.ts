interface InitialState {
  auth: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: InitialState = {
  auth: true,
  accessToken: null,
  refreshToken: null,
};

export { initialState };
