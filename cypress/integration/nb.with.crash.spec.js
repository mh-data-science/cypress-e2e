import { captureViewCall } from '../helpers/view/viewCall';

const startUrl = 'https://www.nieuwsblad.be';

describe('Tracking view calls', function() {
  const url = {
    url: startUrl
  };
  it('NB homepage', function() {
    captureViewCall(url, true);
  });
});
