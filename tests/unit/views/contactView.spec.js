import { shallowMount } from "@vue/test-utils";
import ContactView from "@/views/ContactView.vue";

describe("Componente Contador.vue", () => {
  test("Validación de match con el snapshot", () => {
    //Selección el Sujeto de pruebas
    const wrapper = shallowMount(ContactView);
    //Aserción
    expect(wrapper.html()).toMatchSnapshot();
  });
});

