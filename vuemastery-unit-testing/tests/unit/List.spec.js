import List from "@/components/List";
import { mount } from '@vue/test-utils';

describe('List', () => {
  it('Renders li for each item in props.items', () => {
    const items = ['', ''];
    const wrapper = mount(List, {
      propsData: {
        items
      }
    });
    const liItems = wrapper.findAll('[data-testid="list-item"]');
    expect(liItems).toHaveLength(items.length);
  });
});