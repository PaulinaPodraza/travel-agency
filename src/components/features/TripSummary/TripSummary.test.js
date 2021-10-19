import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const idLink = 'abc';
    const expectedLink = '/trip/' + idLink;
    const component = shallow(<TripSummary id={idLink} image={'image.jpg'} name={'Image'} cost={'1234'} days={5} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render image with src and alt', () => {
    const src = 'image.jpg';
    const alt = 'image';
    const component = shallow(<TripSummary id={'abc'} image={'src'} name={'alt'} cost={'1234'} days={5} />);
    expect(component.find('img').prop(src)).toEqual('image.jpg');
    expect(component.find('img').prop(alt)).toEqual('image');
  });

  it('should render props name, cost, days', () => {
    const name = 'ABC';
    const cost = '$123';
    const days = '5';
    const component = shallow(<TripSummary id={'abc'} image={'image.jpg'} name={'ABC'} cost={'$1234'} days={5} />);
    expect(component.find('.title').prop(name)).toEqual('ABC');
    expect(component.find('.details').prop(cost)).toEqual('$123');
    expect(component.find('.details').prop(days)).toEqual('5');
  });
});