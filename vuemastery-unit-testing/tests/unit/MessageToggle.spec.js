import MessageToggle from "@/components/MessageToggle";
import { mount } from "@vue/test-utils";

describe("MessageToggle", () => {
  it("Displays default message", () => {
    const wrapper = mount(MessageToggle);
    const message = wrapper.find('[data-testid="message"').element.textContent;
    expect(message).toEqual('default message');
  });

  it("Toggles message when button is clicked", async () => {
    const wrapper = mount(MessageToggle);
    const messageButton = wrapper.find('[data-testid="toggle-message"');

    messageButton.trigger("click");
    await wrapper.vm.$nextTick();
    const message = wrapper.find('[data-testid="message"');
    console.log(message.element.textContent);

    messageButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(message.element.textContent).toBe('toggled message');
  });
});