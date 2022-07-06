import { INetwork } from './interface';

export class FindNetworkEndpoint {
  network: INetwork;
  startNodeId: number;

  constructor(startNodeId: number, fromIds: number[], toIds: number[]) {
    if (fromIds.length !== toIds.length)
      throw Error(`${fromIds} and ${toIds} must have the same length`);
    if (fromIds.length < 1 || toIds.length < 1)
      throw Error(`${fromIds} and ${toIds} must not be empty arrays`);
    this.network = this.convertToPath(fromIds, toIds);
    this.startNodeId = startNodeId;
  }

  private convertToPath(fromIds: number[], toIds: number[]): INetwork {
    const network: INetwork = {};
    fromIds.map((fromId, index) => {
      network[fromId] = toIds[index];
    });
    return network;
  }

  find(): number {
    let endNode = this.startNodeId;
    if (this.network[this.startNodeId] === undefined) {
      throw Error(`${this.startNodeId} is not existing in ${this.network}`);
    } else {
      for (const [nodeId, nodeValue] of Object.entries(this.network)) {
        if (parseInt(nodeId) === endNode) {
          const lastNodeValue = Object.values(this.network).pop();
          const firstNodeId = Object.keys(this.network).shift();
          if (
            nodeValue === lastNodeValue &&
            nodeValue.toString() !== firstNodeId
          ) {
            endNode = nodeValue;
          } else if (nodeValue !== lastNodeValue) {
            endNode = nodeValue;
          }
        }
      }
    }
    return endNode;
  }
}
