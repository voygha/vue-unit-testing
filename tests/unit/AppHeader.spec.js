import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader";

describe("AppHeader", () => {
  test("if logged in is false, do not show logout button", () => {
    // Montar el componente con loggedIn como false
    const wrapper = mount(AppHeader, {
      props: {
        loggedIn: false,
      },
    });

    // Buscar el botón y verificar si está visible
    const button = wrapper.find("button");
    expect(button.exists()).toBe(false);
  });

  test("if logged in, show logout button", () => {
    // Montar el componente con loggedIn como true
    const wrapper = mount(AppHeader, {
      props: {
        loggedIn: true,
      },
    });

    // Buscar el botón y verificar si está visible
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.isVisible()).toBe(true);
  });
});
