/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Message from './Message';

import { Size } from './types';

describe('Test Message', () => {
  const message =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at egestas nisi. Pellentesque id pulvinar ipsum. Mauris imperdiet elit et euismod mattis. Quisque malesuada vitae est ut ullamcorper. Pellentesque a convallis odio. Morbi est mi, dictum at dolor vitae, rhoncus ultricies nunc. Nunc placerat ipsum ac nisl maximus, id maximus.';

  it('Mount Message', () => {
    const wrapper = mount(<Message message={message} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Message is small', () => {
    const wrapper = mount(<Message message={message} size={Size.Small} />);

    const messageDiv = wrapper.find('.message').hasClass('is-small');

    expect(messageDiv).toBeTruthy();
  });

  it('Test Message click event', () => {
    const onDeleteEvent = jest.fn();
    const wrapper = mount(
      <Message header="Message Header" message={message} onDelete={onDeleteEvent} />
    );

    const deleteButton = wrapper.find('.delete');

    deleteButton.simulate('click');

    expect(onDeleteEvent).toHaveBeenCalled();
  });
});
