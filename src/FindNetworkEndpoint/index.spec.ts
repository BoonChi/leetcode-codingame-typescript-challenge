import { FindNetworkEndpoint } from './index';

describe('FindNetworkEndpoint', () => {
  describe('has two different lengths of arrays', () => {
    it('throw error', () => {
      const startNodeId = 1;
      const fromIds = [1, 2];
      const toIds = [1];
      expect(
        () => new FindNetworkEndpoint(startNodeId, fromIds, toIds)
      ).toThrowError(`${fromIds} and ${toIds} must have the same length`);
    });
  });

  describe('has two same lengths of arrays', () => {
    describe('has empty arrays', () => {
      const startNodeId = 1;
      const fromIds = [] as number[];
      const toIds = [] as number[];
      expect(
        () => new FindNetworkEndpoint(startNodeId, fromIds, toIds)
      ).toThrowError(`${fromIds} and ${toIds} must not be empty arrays`);
    });

    describe('starting node is not existing in fromIds', () => {
      it('throw error', () => {
        const startNodeId = 10;
        const fromIds = [1, 2];
        const toIds = [5, 7];
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(() => compute.find()).toThrowError(
          `${startNodeId} is not existing in ${compute.network}`
        );
      });
    });

    describe('starting node is existing in fromIds', () => {
      describe('without running into a loop', () => {
        const startNodeId = 2;
        const fromIds = [1, 7, 3, 4, 2, 6, 9];
        const toIds = [3, 3, 4, 6, 6, 9, 5];

        it('return 5', () => {
          const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
          expect(compute.find()).toBe(5);
        });

        it('return 5 starting from 1', () => {
          const startNodeId = 1;
          const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
          expect(compute.find()).toBe(5);
        });

        it('return 5 starting from 4', () => {
          const startNodeId = 4;
          const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
          expect(compute.find()).toBe(5);
        });
      });
    });

    describe('while running into a loop', () => {
      const startNodeId = 1;
      const fromIds = [1, 3];
      const toIds = [3, 1];

      it('return 3', () => {
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(compute.find()).toBe(3);
      });
    });

    describe('partially linked network', () => {
      let startNodeId = 1;
      const fromIds = [1, 3, 5, 7, 9];
      const toIds = [3, 1, 0, 1, 2];

      it('return 1', () => {
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(compute.find()).toBe(1);
      });

      it('return 0', () => {
        startNodeId = 5;
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(compute.find()).toBe(0);
      });

      it('return 2', () => {
        startNodeId = 9;
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(compute.find()).toBe(2);
      });
    });

    describe('partially linked network and run into looping', () => {
      let startNodeId = 1;
      const fromIds = [2, 3, 5, 7, 9];
      const toIds = [3, 1, 0, 1, 2];

      it('return 9', () => {
        startNodeId = 9;
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(compute.find()).toBe(9);
      });
    });

    describe('only has one element', () => {
      let startNodeId = 2;
      const fromIds = [2];
      const toIds = [3];

      it('return 3', () => {
        startNodeId = 2;
        const compute = new FindNetworkEndpoint(startNodeId, fromIds, toIds);
        expect(compute.find()).toBe(3);
      });
    });
  });
});
