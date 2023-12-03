import Leftbar from "@/components/organisms/home/Leftbar";
import { render, screen } from "@testing-library/react";

describe("Shows different components based on wheter the user is logged in or not", () => {
  test("renders login button", () => {
    const props = {
      loading: false,
      loggedIn: false,
      user: undefined,
    };
    render(<Leftbar {...props} />);

    const btn = screen.getByText("Iniciar sesión");
    expect(btn).toBeInTheDocument();
  });

  test("renders skeleton", () => {
    const props = {
      loading: true,
      loggedIn: false,
      user: undefined,
    };
    render(<Leftbar {...props} />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("rounded-full");
  });

  test("renders user logged in", () => {
    const props = {
      loggedIn: true,
      loading: false,
      user: {
        user_id: 2,
        social_id: "105908333614673593313",
        username: "Diego Alejandro Cifuentes Arango",
        email: "diego.cifuentes.dev@gmail.com",
        picture:
          "https://lh3.googleusercontent.com/a/AAcHTtcF4SvvWjsqelDaS6RPq9GOpPZQ7KC3LFqxImDXXhAiwA=s96-c",
        provider: "google",
      },
    };
    render(<Leftbar {...props} />);

    const userName = screen.getByText(props.user.username);
    const userImg = screen.getByAltText("user picture");

    expect(userName).toBeInTheDocument();
    expect(userImg).toBeInTheDocument();
  });
});
