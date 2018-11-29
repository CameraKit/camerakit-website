
import WordSlider from '../word-slider';

export default () => (
  <div className="slider-container">
    <WordSlider duration={1800}>
      <span>Mobile Apps</span>
      <span>Expense Reporting</span>
      <span>Data Cap</span>
      <span>the Enterprise</span>
      <span>Android Developers</span>
    </WordSlider>
    <style jsx>
      {`
      .slider-container {
        margin: auto;
        margin-top: 0;
        margin-bottom: -1rem;
        line-height: 1.4em;
        white-space: nowrap;
      }
    `}
    </style>
  </div>
);
