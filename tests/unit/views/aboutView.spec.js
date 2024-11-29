import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("Componente Contador.vue", () => {
  test("Validación de match con el snapshot", () => {
    //Selección el Sujeto de pruebas
    const wrapper = shallowMount(AboutView);
    //Aserción
    expect(wrapper.html()).toMatchSnapshot();
  });
});
