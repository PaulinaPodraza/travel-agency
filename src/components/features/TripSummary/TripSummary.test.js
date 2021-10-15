import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const idLink = 'abc';
    const expectedLink = '/trip/' + idLink;
    const component = shallow(<TripSummary  id={idLink} image={'image.jpg'} name={'Image'} cost={'1234'} days={5}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

    it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });