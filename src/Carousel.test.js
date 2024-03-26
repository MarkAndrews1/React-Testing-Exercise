import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import React from "react";
import App from './App.js'

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();


});

it('works when you click on the left arrow', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move backwards in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
})

it('should hide the left arrow on the first img and the right arrow on the last img', () => {
  const photos = [
    { src: 'image1.jpg', caption: 'Image 1' },
    { src: 'image2.jpg', caption: 'Image 2' },
  ];
  const title = 'Test Carousel';

  const { container } = render(<Carousel photos={photos} title={title} />)

  const leftArrow = container.querySelector(".bi-arrow-left-circle")
  const rightArrow = container.querySelector(".bi-arrow-right-circle")

  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument()

  fireEvent.click(rightArrow)

  expect(rightArrow).not.toBeInTheDocument();
})


// Snap Test
it('renders Carousel component correctly', () => {
  const photos = [
    { src: 'image1.jpg', caption: 'Image 1' },
    { src: 'image2.jpg', caption: 'Image 2' },
  ];
  const title = 'Test Carousel';

  const { container } = render(<Carousel photos={photos} title={title} />);
  expect(container).toMatchSnapshot();
})

//Smoke Test
it('renders App component without crashing', () => {
  render(<App />)
})