import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as mocha from 'mocha';
import * as sinon from 'sinon';

// Configure Chai
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

// Import testables
import { helloWorld } from '../src/hello-world';
import * as helloWorldSpec from './hello-world.spec';

// Unit tests
describe('@seantrane/hello-world', function() {

  beforeEach(function() {
    this.consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    this.consoleSpy.restore();
  });

  it('should call console.log once', function() {
    helloWorld();
    expect(this.consoleSpy.calledOnce).to.equal(true);
  });

  it(`should call console.log, passing value; "${helloWorldSpec.default.args[0]}"`, function() {
    helloWorld();
    expect(this.consoleSpy.calledWith(helloWorldSpec.default.args[0])).to.equal(true);
  });

});
