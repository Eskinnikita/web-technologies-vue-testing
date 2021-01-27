import Rating from "@/components/Rating";
import { shallowMount } from "@vue/test-utils";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Rating, {
    propsData: {
      maxStars: 5,
      initialGrade: 2
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Rating", () => {
  it("Renders the stars", () => {
    const stars = wrapper.findAll(".star");
    expect(stars.length).toBe(5);
  });

  it("Renderds the active stars", () => {
    const activeStars = wrapper.findAll(".active");
    expect(activeStars.length).toBe(2);
  });

  it("Renders a summary", () => {
    const summary = wrapper.find('.summary');
    expect(summary.text()).toBe("2 of 5");
  });
});