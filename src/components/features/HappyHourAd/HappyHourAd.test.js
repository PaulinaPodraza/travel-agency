import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd.js';

const mockProps = {
  title: 'Happy Hour',
  description: 'Happy Hour Description',
};

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render h3 with class title and div with class promoDescription', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render correct text Title', () => {
    const component = shallow(<HappyHourAd title={mockProps.title} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});

const trueDate = Date;

const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date 1', () => {

  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();

    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    jest.useRealTimers();
    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date 2', () => {

  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:59', 1, mockProps.description);
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date 3', () => {

  checkDescriptionAtTime('12:00:00', mockProps.description);
  checkDescriptionAtTime('12:10:59', mockProps.description);
  checkDescriptionAtTime('12:59:59', mockProps.description);
});

describe('Component HappyHourAd with mocked Date 4', () => {

  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('12:00:00', 1, mockProps.description);
  checkDescriptionAfterTime('12:59:59', 1, 23 * 60 * 60 + '');
});