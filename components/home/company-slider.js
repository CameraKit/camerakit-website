import BackgroundSlider from '../background-slider';
import Container from '../container';

import Expensify from '../icons/companies/expensify';
import Goosechase from '../icons/companies/goosechase';
import InFitting from '../icons/companies/infitting';

export default () => (
  <Container wide>
    <div className="company-slider">
      <BackgroundSlider duration={40}>
        <div className="company-logos-container">
          <div><Expensify /></div>
          <div><Goosechase /></div>
          <div><InFitting /></div>
        </div>
      </BackgroundSlider>

      <style jsx>
        {`
          .company-slider {
            margin-top: 4rem;
            margin-bottom: 3rem;
          }
          .company-logos-container {
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            display: flex;
          }
          .company-logos-container > div {
            display: inline-block;
            padding: 0 2.2rem;
            vertical-align: middle;
            opacity: .25;
            outline: none;
            cursor: default;
            transition: opacity .2s ease;
            height: 100px;
            width: 400px;
            display: flex;
            align-content: center;
            justify-content: center;
            align-self: center;
          }
          .company-logos-container > div:hover {
            opacity: .8;
          }
        `}
      </style>
    </div>
  </Container>
)