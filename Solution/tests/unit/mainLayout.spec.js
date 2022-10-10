import { shallowMount } from "@vue/test-utils";
import MainLayout from "@/components/MainLayout.vue";

describe("MainLayout.vue", () => {
  it("renders props.title when passed", () => {
    const title = "new message";
    const wrapper = shallowMount(MainLayout, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
