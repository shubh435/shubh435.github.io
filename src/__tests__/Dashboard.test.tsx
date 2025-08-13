import { screen, render } from "@testing-library/react";
import Dashboard from "../routes/Dashboard/index";

jest.mock("three/examples/jsm/environments/RoomEnvironment.js", () => {});
jest.mock("three", () => ({
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
  })),
  PerspectiveCamera: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => () => {},
  useLocation: () => () => {},
}));
describe("App test cases", () => {
  it("To render App file", () => {
    render(<Dashboard />);
  });
});
