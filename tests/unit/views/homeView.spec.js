import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("Componente Contador.vue", () => {
  test("Validación de match con el snapshot", () => {
    //Selección el Sujeto de pruebas
    const wrapper = mount(HomeView);
    //Aserción
    expect(wrapper.html()).toMatchSnapshot();
  });
});
