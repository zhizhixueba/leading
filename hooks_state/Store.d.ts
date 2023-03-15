/**
 * Author: Meng
 * Date: 2023-
 * Desc:
 */

declare class Store {
  onCreate(props): void;

  onShow(): void;

  getBeforeUpdate(prevProps, prevState): void;

  onUpdate(prevProps, prevState, snapshot): void;

  onCatch(error, errorInfo): void;

  shouldUpdate(nextProps, nextState, nextContext): boolean;

  onDestroy(): void;
}

export default Store;
