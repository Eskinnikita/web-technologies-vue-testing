import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios.js";
import flushPromises from "flush-promises";

jest.mock("@/services/axios.js");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ "text": "Hello from the db!" });
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="message"').element.textContent;
    expect(message).toEqual(mockMessage);

  });

  it("Displays an error when getMessage call fails", async () => {
    const mockError = "Ooops! Something went wrong!";
    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const error = wrapper.find('[data-testid="message-error"').element.textContent;
    expect(error).toEqual(mockError);

  });
});