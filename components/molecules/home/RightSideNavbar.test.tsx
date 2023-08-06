import Navbar from "@/components/organisms/home/Navbar";
import { render, screen, waitFor } from "@testing-library/react";

describe("Shows different components based on wheter the user is logged in or not", () => {
  test("renders iniciar sesion button", () => {
    const props = {
      loading: false,
      loggedIn: false,
      user: undefined,
      accessToken: undefined,
    };
    render(<Navbar {...props} />);

    const btn = screen.getByText("Iniciar sesión");
    expect(btn).toBeInTheDocument();
  });

  test("renders skeleton", () => {
    const props = {
      loading: true,
      loggedIn: false,
    };
    render(<Navbar {...props} />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("rounded-full");
  });

  // TODO: do this shit
  test("renders user logged in", () => {});
});
