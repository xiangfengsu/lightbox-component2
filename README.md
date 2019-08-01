# React lightbox component

An image lightbox component for ReactJS. 

Features:
 * Zoom control
 * Rotate control
 * Smooth animations
 * Customizable thumbnails


## Installation

`npm install lightbox-component2`

## Basic Usage

```
import Lightbox from 'lightbox-component2';

const App = () => (
  <div>
    <Lightbox images={
      [
        {
          src: 'some image url',
          title: 'image title',
          description: 'image description'
        }
      ]
    }/>
  </div>
);
```

## License

MIT