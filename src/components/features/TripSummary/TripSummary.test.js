import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const idLink = 'abc';
    const expectedLink = '/trip/' + idLink;
    const component = shallow(<TripSummary id={idLink} image={'image.jpg'} name={'Image'} cost={'1234'} days={5} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render image with src and alt', () => {
    const src = 'image.jpg';
    const alt = 'image';
    const component = shallow(<TripSummary id={'abc'} image={src} name={alt} cost={'1234'} days={5} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual('image.jpg');
    expect(component.find('img').prop('alt')).toEqual('image');
  });

  it('should render props name, cost, days', () => {
    const name = 'ABC';
    const cost = '$123';
    const days = 5;
    const component = shallow(<TripSummary id={'abc'} image={'image.jpg'} name={name} cost={cost} days={days} tags={[]}/>);
    expect(component.find('.title').text()).toEqual('ABC');
    expect(component.find('.details span').last().text()).toEqual('from $123');
    expect(component.find('.details span').first().text()).toEqual('5 days');
  });

  it('should render tags', () => {
    const boardTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id={'abc'} image={'image.jpg'} name={'ABC'} cost={'$123'} days={5} tags={boardTags}/>);
    expect(component.find('.tags .tag').at(0).text()).toEqual(boardTags[0]);
    expect(component.find('.tags .tag').at(1).text()).toEqual(boardTags[1]);
    expect(component.find('.tags .tag').at(2).text()).toEqual(boardTags[2]);
  });

  it('shouldnt render tags when table tags is empty or undefined', () => {
    const componentA = shallow(<TripSummary id={'abc'} image={'image.jpg'} name={'ABC'} cost={'$123'} days={5} />);
    expect(componentA.find('.tags .tag').exists()).toEqual(false);
    const componentB = shallow(<TripSummary id={'abc'} image={'image.jpg'} name={'ABC'} cost={'$123'} days={5} tags={[]}/>);
    expect(componentB.find('.tags .tag').exists()).toEqual(false);
  });
});