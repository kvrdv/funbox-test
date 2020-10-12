import { loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http'); //eslint-disable-line

beforeEach(() => { //eslint-disable-line
  jest.resetAllMocks(); //eslint-disable-line
});

test('should call loadUser once', () => { //eslint-disable-line
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({}); //eslint-disable-line
  expect(httpGet).toBeCalledWith('http://server:8080/users/1'); //eslint-disable-line
});
